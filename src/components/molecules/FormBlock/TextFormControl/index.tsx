import * as React from 'react';
import classNames from 'classnames';

export default function TextFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const attr: any = {};
    if (props.label) {
        attr['aria-labelledby'] = labelId;
    }
    if (props.isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={props['data-sb-field-path']}
        >
            {props.label && (
                <label id={labelId} className={classNames('sb-label', { 'sr-only': props.hideLabel })} htmlFor={props.name} data-sb-field-path=".label .name#@for">
                    {props.label}
                </label>
            )}
            <input
                id={props.name}
                className="sb-input"
                type="text"
                name={props.name}
                {...(props.placeholder ? { placeholder: props.placeholder } : null)}
                {...attr}
                data-sb-field-path=".name#@id .name#@name .placeholder#@placeholder"
            />
        </div>
    );
}
