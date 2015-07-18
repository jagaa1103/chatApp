/**
 * Created by jagaa on 7/18/15.
 */
///<reference path="typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View} from "angular2/angular2";

@Component({selector:'chat-app'})
@View({templateUrl: 'chatApp/chat.html'})


class ChatApp{

}

bootstrap(ChatApp);