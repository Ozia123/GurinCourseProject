import { Component, OnDestroy } from "@angular/core";
import { SpeechService as ngxSpeechService } from 'ngx-speech';
import { getCurrentLanguageCode } from "./speech-helper/speech-helper";
import { Subscription } from "rxjs";
import { SpeechService } from "src/app/services/speech.service";
import { MatDialog } from "@angular/material";
import createDialog from "src/app/helpers/create-dialog-helper";
import { config } from "src/app/constants/config";

@Component({
    selector: 'app-speech',
    templateUrl: './speech.component.html',
    styleUrls: ['./speech.component.scss'],
    providers: [{ provide: 'SPEECH_LANG', useValue: getCurrentLanguageCode() }]
})
export class SpeechComponent implements OnDestroy {
    public isListening: boolean;
    public subscription: Subscription;
    public messages: Array<string>;

    constructor(
        public readonly speech: ngxSpeechService,
        private readonly speechService: SpeechService,
        public dialog: MatDialog) {
        this.isListening = false;
        this.messages = [];
    }

    public toggleListening() {
        if (this.isListening) {
            this.stopListening();
        }
        else {
            this.startListening();
        }

        this.isListening = !this.isListening;
    }

    private startListening() {
        this.speech.start();

        this.subscription = this.speech.message
            .subscribe(message => {
                if (message) {
                    this.clearMessages();

                    this.messages.push(message.message);

                    this.tryGetSearchResult(message.message);

                    this.stopListening();

                    this.isListening = false;
                }
            });
    }

    public ngOnDestroy() {
        this.stopListening();
    }

    private stopListening() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        if (this.speech.started) {
            this.speech.stop();
        }
    }

    private tryGetSearchResult(message: string) {
        this.speechService.openDialog(message)
            .subscribe(result => {
                if (result.nonSuccess) {
                    createDialog(this.dialog, config.dialogs.searchDialog, message)
                        .subscribe(() => {
                            this.clearMessages();
                        });
                }
                else {
                    this.clearMessages();
                }
            });
    }

    private clearMessages() {
        if (this.messages.length !== 0) {
            this.messages.pop();
        }
    }
}
