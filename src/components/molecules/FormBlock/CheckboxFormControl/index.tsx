import * as React from 'react';
import classNames from 'classnames';

export default function CheckboxFormControl(props) {
    const { name, label, isRequired, width = 'full', 'data-sb-field-path': fieldPath } = props;
    const labelId = `${name}-label`;
    const attr: any = {};
    if (label) {
        attr['aria-labelledby'] = labelId;
    }
    if (isRequired) {
        attr.required = true;
    }
    return (
        <div
            className={classNames('sb-form-control', 'flex', 'items-center', {
                'sm:col-span-2': width === 'full'
            })}
            data-sb-field-path={fieldPath}
        >
            <input id={name} className="sb-checkbox" type="checkbox" name={name} {...attr} data-sb-field-path=".name#@id .name#@name" />
            {label && (
                <label id={labelId} className="sb-label" htmlFor={name} data-sb-field-path=".label .name#@for">
                    {label}
                </label>
            )}
        </div>
    );
}
