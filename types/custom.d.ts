import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'hellohire-jobs': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'organization-id'?: string;
        'button-color'?: string;
      }, HTMLElement>;
    }
  }
}

export {};
