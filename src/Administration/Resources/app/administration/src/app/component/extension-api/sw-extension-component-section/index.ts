import { ComponentSectionEntry } from 'src/app/state/extension-component-sections.store';
import template from './sw-extension-component-section.html.twig';

/**
 * @private
 * @description A card is a flexible and extensible content container.
 * @status ready
 * @example-type dynamic
 * @component-example
 * <sw-extension-component-section positionId="my-special-position" />
 */
Shopware.Component.register('sw-extension-component-section', {
    template,

    extensionApiDevtoolInformation: {
        property: 'ui.componentSection',
        method: 'add',
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        positionId: (currentComponent) => currentComponent.positionId as string,
    },

    props: {
        positionId: {
            type: String,
            required: true,
        },
    },

    computed: {
        componentSections(): ComponentSectionEntry[] {
            return Shopware.State.get('extensionComponentSections').identifier[this.positionId] ?? [];
        },
    },
});