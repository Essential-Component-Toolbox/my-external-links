import {LitElement, html, css} from 'lit';

export class MySocialMedia extends LitElement {
    
    static get tag() {
        return 'my-social-media';
    }

    constructor() {
        super();
        
        // Link attributes
        this.discordLink = '';
        this.facebookLink = '';
        this.githubLink = '';
        this.instagramLink = '';
        this.pinterestLink = '';
        this.playstationLink = '';
        this.snapchatLink = '';
        this.tiktokLink = '';
        this.twitterLink = '';
        this.xLink = '';
        this.xboxlink = '';

        // Other attributes
        /* 
            TODO:
              * add alignment settings (left, center, right)
        */
        this.lightIcons = false;
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
                        ${this.discordLink !== '' ? html`<a href="${this.discordLink}">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>
                        </a>` : ''}
                    </div>
                ` : ''}

                ${this.type === 'column' ? html`
                    <div class="type-column">
                        <h3 class='user-text'><slot></slot></h3>
                        ${this.discordLink !== '' ? html`
                            <div class='column-item'>
                                <a href="${this.discordLink}">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><g id="图层_2" data-name="图层 2"><g id="Discord_Logos" data-name="Discord Logos"><g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></g></g></g></svg>
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
            discordLink: {
                type: String,
                attribute: 'discord-link',
            },
            facebookLink: {
                type: String,
                attribute: 'facebook-link'
            },
            githubLink: {
                type: String,
                attribute: 'github-link',
            },
            instagramLink: {
                type: String,
                attribute: 'instagram-link',
            },
            pinterestLink: {
                type: String,
                attribute: 'pinterest-link',
            },
            playstationLink: {
                type: String,
                attribute: 'playstation-link',
            },
            snapchatLink: {
                type: String,
                attribute: 'snapchat-link',
            },
            tiktokLink: {
                type: String,
                attribute: 'tiktok-link',
            },
            twitterLink: {
                type: String,
                attribute: 'twitter-link',
            },
            xLink: {
                type: String,
                attribute: 'x-link',
            },
            xboxlink: {
                type: String,
                attribute: 'xbox-link',
            },
            lightIcons: {
                type: Boolean,
                attribute: 'light-icons',
            },
            type: {
                type: String,
            },
            iconSize: {
                type: String,
                attribute: 'icon-size',
            }
        };
    }
}

globalThis.customElements.define(MySocialMedia.tag, MySocialMedia);