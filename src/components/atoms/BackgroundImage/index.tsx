import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function BackgroundImage(props) {
    const { url } = props;
    if (!url) {
        return null;
    }
    const cssClasses = props.className || null;
    const imageOpacity = props.opacity || props.opacity === 0 ? props.opacity : 100;
    const backgroundImageSize = props.backgroundSize || 'cover';
    const backgroundImagePosition = props.backgroundPosition || 'center';
    const backgroundImageRepeat = props.backgroundRepeat || 'no-repeat';
    return (
        <div
            className={classNames(
                'fixed',
                'inset-0',
                mapStyles({ backgroundSize: backgroundImageSize }),
                mapStyles({ backgroundPosition: backgroundImagePosition }),
                cssClasses,
                {
                    'bg-repeat': backgroundImageRepeat === 'repeat',
                    'bg-repeat-x': backgroundImageRepeat === 'repeat-x',
                    'bg-repeat-y': backgroundImageRepeat === 'repeat-y',
                    'bg-no-repeat': backgroundImageRepeat === 'no-repeat'
                }
            )}
            style={{
                backgroundImage: `url('${url}')`,
                opacity: imageOpacity * 0.01
            }}
        />
    );
}
