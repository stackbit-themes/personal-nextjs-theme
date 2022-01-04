import * as React from 'react';
import classNames from 'classnames';

export default function SelectFormControl(props) {
    const width = props.width || 'full';
    const labelId = `${props.name}-label`;
    const options = props.options || [];
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
            <select id={props.name} className="sb-select" name={props.name} {...attr} data-sb-field-path=".name#@id .name#@name .options">
                {props.defaultValue && (
                    <option value="" data-sb-field-path=".defaultValue">
                        {props.defaultValue}
                    </option>
                )}
                {options.length > 0 &&
                    options.map((option, index) => (
                        <option key={index} value={option} data-sb-field-path={`.${index}`}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
}
