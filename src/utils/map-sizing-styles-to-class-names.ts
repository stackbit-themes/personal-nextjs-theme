export function mapMinHeightStyles(height?: 'screen' | 'auto') {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
        default:
            return null;
    }
}

export function mapMaxWidthStyles(width?: 'narrow' | 'wide' | 'full') {
    switch (width) {
        case 'narrow':
            return 'max-w-5xl';
        case 'wide':
            return 'max-w-7xl';
        case 'full':
            return 'max-w-full';
        default:
            return null;
    }
}
