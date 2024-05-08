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
        this.lightIcons = false;
        this.type = 'logos';
    }

    static get styles() {
        return css`
            
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
        };
    }
}

globalThis.customElements.define(MySocialMedia.tag, MySocialMedia);
export {MySocialMedia};