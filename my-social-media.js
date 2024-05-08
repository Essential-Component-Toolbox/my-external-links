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
        this.playstationLink = '';
        this.snapchatLink = '';
        this.twitterLink = '';
        this.xLink = '';
        this.xboxlink = '';
        this.pinterestLink = '';
        this.tiktokLink = '';

        // Other attributes
        this.darkIcons = false;
        this.type = 'logos';
    }

    static get styles() {
        return css`
            
        `
    }

    render() {
        // TODO make it so it goes to the proper file path for light-logos or dark-logos
        let logoColor = '';
        if (this.darkIcons === false) {
            logoColor = 'light-logos';
        } else {
            logoColor = 'dark-logos';
        }

        return html`
            <div class="my-social-media-container">
                ${this.type === 'logos' ? html`
                    <div class="type-logos">
                        ${this.discordLink !== '' ? html`<a href="${this.discordLink}"><img class='logo' src="/assets/${logoColor}/discord.png" alt="Link to Discord"/></a>` : ''}
                    </div>
                ` : ''}

                ${this.type === 'column' ? html`
                    <div class="type-column">
                        ${this.discordLink !== '' ? html`
                            <div class='discord-row'>
                                <a href="${this.discordLink}"><img class='logo' src="/assets/${logoColor}/discord.svg" alt="Link to Discord"/></a>
                                <a href="${this.discordLink}"><p>Discord</p></a>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `
    }

    static get properties() {
        return {
            facebookLink: {
                type: String,
                attribute: 'facebook-link'
            },
            twitterLink: {
                type: String
            },
            xLink: {
                type: String
            },
            discordLink: {
                type: String,
                attribute: 'discord-link'
            },
            githubLink: {
                type: String
            },
            playstationLink: {
                type: String
            },
            xboxlink: {
                type: String
            },
            instagramLink: {
                type: String
            },
            snapchatLink: {
                type: String
            },
            darkIcons: {
                type: Boolean,
                attribute: dark-icons,
            }
        };
    }
}

globalThis.customElements.define(MySocialMedia.tag, MySocialMedia);
export {MySocialMedia};