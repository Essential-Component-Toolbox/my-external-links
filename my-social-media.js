import {LitElement, html, css} from 'lit';

export class MySocialMedia extends LitElement {
    
    static get tag() {
        return 'my-social-media';
    }

    constructor() {
        super();
        
        // Link attributes
        // TODO: figure out support for a custom link + icon (if possible). May want to branch this issue.
        this.amazonLink = '';
        this.cashAppLink = '';
        this.chessLink = '';
        this.discordLink = '';
        this.dropboxLink = '';
        this.ebayLink = '';
        this.emailAddress = '';
        this.etsyLink = '';
        this.facebookLink = '';
        this.githubLink = '';
        this.googleClassroomLink = '';
        this.googleDriveLink = '';
        this.groupMeLink = '';
        this.instagramLink = '';
        this.kofiLink = '';
        this.linkedInLink = '';
        this.linkedInLearningLink = '';
        this.mySpaceLink = '';
        this.onlyFansLink = '';
        this.payPalLink = '';
        this.patreonLink = '';
        this.pinterestLink = '';
        this.playstationLink = '';
        this.phoneNumber = null;
        this.redditLink = '';
        this.shopifyLink = '';
        this.slackLink = '';
        this.snapchatLink = '';
        this.spotifyLink = '';
        this.steamLink = '';
        this.teamsLink = '';
        this.telegramLink = '';
        this.threadsLink = '';
        this.tiktokLink = '';
        this.twitchLink = '';
        this.twitterLink = '';
        this.venmoLink = '';
        this.vscoLink = '';
        this.wechatLink = '';
        this.whatsappLink = '';
        this.xLink = '';
        this.xboxlink = '';
        this.youtubeLink = '';
        this.zoomLink = '';

        // Other attributes
        /* 
            TODO:
              * add alignment settings (left, center, right)
        */
        this.type = 'logos';
    }

    static get styles() {
        return css`
            :host([light-icons]) svg, :host([light-icons]) h3, :host([light-icons]) a {
                fill: white;
                color: white;
            }

            .my-social-media-container {
                padding: 4px;
            }

            h3 {
                font-weight: normal;
                text-decoration: underline;
            }

            svg {
                width: 36px;
            }

            a {
                text-decoration: none;
                color: black;
            }

            .text-anchor:hover, .text-anchor:focus {
                text-decoration: underline;
            }

            // ! modify to work
            .column-item {
                display: flex;
                align-items: center;
            }
        `
    }

    // TODO may wish to use full size logos if all of them have text for column alignment
    render() {
        // TODO make it so it goes to the proper file path for light-logos or dark-logos
        let logoColor = '';
        if (this.lightIcons) {
            logoColor = 'light-logos';
        } else {
            logoColor = 'dark-logos';
        }

        return html`
            <div class="my-social-media-container">
                ${this.type === 'logos' ? html`
                    <div class="type-logos">
                        <h3 class='user-text'><slot></slot></h3>
                        
                        ${this.amazonLink !== '' ? html`<a href="${this.amazonLink}" target="_blank">
                            <svg viewBox="2.167 .438 251.038 259.969" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fill-rule="nonzero"/><path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" fill="#000"/><path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fill-rule="nonzero"/><path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" fill="#000"/></g></svg>
                        </a>` : ''}

                        ${this.cashAppLink !== '' ? html`<a href="${this.cashAppLink}" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" class="app-icon" viewBox="0 0 64 64"><g fill-rule="nonzero" fill="#FFF"><path d="M41.7 0c6.4 0 9.6 0 13.1 1.1a13.6 13.6 0 0 1 8.1 8.1C64 12.7 64 15.9 64 22.31v19.37c0 6.42 0 9.64-1.1 13.1a13.6 13.6 0 0 1-8.1 8.1C51.3 64 48.1 64 41.7 64H22.3c-6.42 0-9.64 0-13.1-1.1a13.6 13.6 0 0 1-8.1-8.1C0 51.3 0 48.1 0 41.69V22.3c0-6.42 0-9.64 1.1-13.1a13.6 13.6 0 0 1 8.1-8.1C12.7 0 15.9 0 22.3 0h19.4z" fill="#00D632"/><path d="M42.47 23.8c.5.5 1.33.5 1.8-.0l2.5-2.6c.53-.5.5-1.4-.06-1.94a19.73 19.73 0 0 0-6.72-3.84l.79-3.8c.17-.83-.45-1.61-1.28-1.61h-4.84a1.32 1.32 0 0 0-1.28 1.06l-.7 3.38c-6.44.33-11.9 3.6-11.9 10.3 0 5.8 4.51 8.29 9.28 10 4.51 1.72 6.9 2.36 6.9 4.78 0 2.49-2.38 3.95-5.9 3.95-3.2 0-6.56-1.07-9.16-3.68a1.3 1.3 0 0 0-1.84-.0l-2.7 2.7a1.36 1.36 0 0 0 .0 1.92c2.1 2.07 4.76 3.57 7.792 4.4l-.74 3.57c-.17.83.44 1.6 1.27 1.61l4.85.04a1.32 1.32 0 0 0 1.3-1.06l.7-3.39C40.28 49.07 45 44.8 45 38.57c0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2.04-6.08-4.53 0-2.42 2.63-3.38 5.27-3.38 3.36 0 6.59 1.39 8.7 3.29z" fill="#FFF"/></g></svg>
                        </a>` : ''}

                        ${this.chessLink !== '' ? html`<a href="${this.chessLink}" target="_blank">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 290 400" style="enable-background:new 0 0 290 400" xml:space="preserve"><style>.st1{fill:#81b64c}</style><path d="M225 273.7c-55.7-42.6-49.5-79.5-50.2-94.7h34c4-7.4 6-14.2 6-22.8l-38.5-25.4c13.4-9.7 22.1-25.5 22.1-43.3 0-22.4-13.8-41.7-33.4-49.6-6.2-2.5-49.8 141.1-49.8 141.1-.2 3.3-.2 7.6-.2 12.8 0 14.3 35 12.1 33.1 24.7-2.8 18.8-3.4 33.2-19.6 78.4-10.9 30.6-83.8 0-89 15-3.6 10.4-5.5 22.1-5.5 34.7 0 1.3 2.9 21.5 111 21.5s111-20.2 111-21.5c0-30.7-11.4-56-31-70.9z" style="fill:#5d9948"/><path class="st1" d="M143 292.8c6-27.4 11.3-56.6 14.6-74.1 4-21.8-29-25.7-42.6-27.7-.6 18.6-5.8 48.9-50.1 82.7-11.9 9.1-20.8 22.1-26 37.9 12 5.8 27.9 9.3 52.5 9.3 15.8 0 45 1.9 51.6-28.1zM166.2 178.9c5.2-13.6 4.6-22.8 4.6-22.8L149 130.7c23.2-9.9 37.2-28.6 37.2-50.3 0-17.3-8.3-32.8-21-42.5-6.2-2.5-13-4-20.1-4-29.5 0-53.4 23.9-53.4 53.5 0 17.8 8.7 33.6 22.1 43.3l-38.5 25.4c0 8.5 2 15.4 6 22.8h84.9z"/><path d="M142 44.9c30.8 4.8-14.2 40.6-28.4 38.9-13.5-1.7-.5-43.4 28.4-38.9z" style="fill:#b2e068"/></svg>
                        </a>` : ''}

                        ${this.discordLink !== '' ? html`<a href="${this.discordLink}" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><defs><style>.cls-1{fill:#5865f2;}</style></defs><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>
                        </a>` : ''}

                        ${this.emailAddress !== '' ? html`<a href="mailto:${this.emailAddress}"> <!--May need target="_blank"-->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66"> <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/> <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/> <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/> <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/> <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/> </svg>
                        </a>` : ''}
                        
                        ${this.facebookLink !== '' ?html`<a href="${this.facebookLink}" target="_blank">
                            <svg version="1.1" id="svg9" viewBox="0 0 666.66668 666.66717" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <defs id="defs13"> <clipPath clipPathUnits="userSpaceOnUse" id="clipPath25"> <path d="M 0,700 H 700 V 0 H 0 Z" id="path23"/> </clipPath> </defs> <g id="g17" transform="matrix(1.3333333,0,0,-1.3333333,-133.33333,799.99999)"> <g id="g19"> <g id="g21" clip-path="url(#clipPath25)"> <g id="g27" transform="translate(600,350)"> <path d="m 0,0 c 0,138.071 -111.929,250 -250,250 -138.071,0 -250,-111.929 -250,-250 0,-117.245 80.715,-215.622 189.606,-242.638 v 166.242 h -51.552 V 0 h 51.552 v 32.919 c 0,85.092 38.508,124.532 122.048,124.532 15.838,0 43.167,-3.105 54.347,-6.211 V 81.986 c -5.901,0.621 -16.149,0.932 -28.882,0.932 -40.993,0 -56.832,-15.528 -56.832,-55.9 V 0 h 81.659 l -14.028,-76.396 h -67.631 V -248.169 C -95.927,-233.218 0,-127.818 0,0" style="fill:#0866ff;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path29"/> </g> <g id="g31" transform="translate(447.9175,273.6036)"> <path d="M 0,0 14.029,76.396 H -67.63 v 27.019 c 0,40.372 15.838,55.899 56.831,55.899 12.733,0 22.981,-0.31 28.882,-0.931 v 69.253 c -11.18,3.106 -38.509,6.212 -54.347,6.212 -83.539,0 -122.048,-39.441 -122.048,-124.533 V 76.396 h -51.552 V 0 h 51.552 v -166.242 c 19.343,-4.798 39.568,-7.362 60.394,-7.362 10.254,0 20.358,0.632 30.288,1.831 L -67.63,0 Z" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path33"/> </g> </g> </g> </g> </svg>
                        </a>` : ''}


                    </div>
                ` : ''}
                
                ${this.type === 'column' ? html`
                    <div class="type-column">
                        <h3 class='user-text'><slot></slot></h3>
                        ${this.discordLink !== '' ? html`
                            <div class='column-item'>
                                <a href="${this.discordLink}">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><defs><style>.cls-1{fill:#5865f2;}</style></defs><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path class="cls-1" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>
                                </a>
                                <a href="${this.discordLink}" class='text-anchor'>Discord</a>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `
    }

    static get properties() {
        return {
            // TODO: double check spelling against constructor spelling, adjust as appropriate
            amazonLink: {
                type: String,
                attribute: 'amazon-link',
            },
            cashAppLink: {
                type: String,
                attribute: 'cashapp-link',
            },
            chessLink: {
                type: String,
                attribute: 'chess-link',
            },
            discordLink: {
                type: String,
                attribute: 'discord-link',
            },
            dropboxLink: {
                type: String,
                attribute: 'dropbox-link',
            },
            ebayLink: {
                type: String,
                attribute: 'ebay-link',
            },
            emailAddress: {
                type: String,
                attribute: 'email-address'
            },
            etsyLink: {
                type: String,
                attribute: 'etsy-link',
            },
            facebookLink: {
                type: String,
                attribute: 'facebook-link'
            },
            githubLink: {
                type: String,
                attribute: 'github-link',
            },
            googleClassroomLink: {
                type: String,
                attribute: 'google-classroom-link',
            },
            googleDriveLink: {
                type: String,
                attribute: 'google-drive-link',
            },
            groupMeLink: {
                type: String,
                attribute: 'groupme-link',
            },
            instagramLink: {
                type: String,
                attribute: 'instagram-link',
            },
            kofiLink: {
                type: String,
                attribute: 'kofi-link',
            },
            linkedInLink: {
                type: String,
                attribute: 'linkedin-link',
            },
            linkedInLearningLink: {
                type: String,
                attribute: 'linkedin-learning-link',
            },
            mySpaceLink: {
                type: String,
                attribute: 'myspace-link',
            },
            onlyFansLink: {
                type: String,
                attribute: 'onlyfans-link',
            },
            payPalLink: {
                type: String,
                attribute: 'paypal-link',
            },
            patreonLink: {
                type: String,
                attribute: 'patreon-link',
            },
            pinterestLink: {
                type: String,
                attribute: 'pinterest-link',
            },
            playstationLink: {
                type: String,
                attribute: 'playstation-link',
            },
            phoneNumber: {
                type: Number,
                attribute: 'phone-number',
            },
            redditLink: {
                type: String,
                attribute: 'reddit-link',
            },
            shopifyLink: {
                type: String,
                attribute: 'shopify-link',
            },
            slackLink: {
                type: String,
                attribute: 'slack-link',
            },
            snapchatLink: {
                type: String,
                attribute: 'snapchat-link',
            },
            spotifyLink: {
                type: String,
                attribute: 'spotify-link',
            },
            steamLink: {
                type: String,
                attribute: 'steam-link',
            },
            teamsLink: {
                type: String,
                attribute: 'teams-link',
            },
            telegramLink: {
                type: String,
                attribute: 'telegram-link',
            },
            threadsLink: {
                type: String,
                attribute: 'threads-link',
            },
            tiktokLink: {
                type: String,
                attribute: 'tiktok-link',
            },
            twitchLink: {
                type: String,
                attribute: 'twitch-link',
            },
            twitterLink: {
                type: String,
                attribute: 'twitter-link',
            },
            venmoLink: {
                type: String,
                attribute: 'venmo-link',
            },
            vscoLink: {
                type: String,
                attribute: 'vsco-link',
            },
            wechatLink: {
                type: String,
                attribute: 'wechat-link',
            },
            whatsappLink: {
                type: String,
                attribute: 'whatsapp-link',
            },
            xLink: {
                type: String,
                attribute: 'x-link',
            },
            xboxlink: {
                type: String,
                attribute: 'xbox-link',
            },
            youtubeLink: {
                type: String,
                attribute: 'youtube-link',
            },
            zoomLink: {
                type: String,
                attribute: 'zoom-link',
            },


            type: {
                type: String,
            },
        };
    }
}

globalThis.customElements.define(MySocialMedia.tag, MySocialMedia);