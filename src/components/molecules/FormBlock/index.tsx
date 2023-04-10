import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const formRef = React.createRef<HTMLFormElement>();
    const { elementId, className, action, destination, fields = [], submitLabel, styles = {}, 'data-sb-field-path': fieldPath } = props;

    if (fields.length === 0) {
        return null;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(formRef.current);
        const value = Object.fromEntries(data.entries());
        alert(`Form data: ${JSON.stringify(value)}`);
    }

    return (
        <form
            className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', className)}
            name={elementId}
            id={elementId}
            onSubmit={handleSubmit}
            ref={formRef}
            data-sb-field-path={fieldPath}
        >
            <div className="grid sm:grid-cols-2 sm:gap-x-4" data-sb-field-path=".fields">
                <input type="hidden" name="form-name" value={elementId} />
                {fields.map((field, index) => {
                    const fieldType = field.type;
                    if (!fieldType) {
                        throw new Error(`form field does not have the 'type' property`);
                    }
                    const FormControl = getComponent(fieldType);
                    if (!FormControl) {
                        throw new Error(`no component matching the form field type: ${fieldType}`);
                    }
                    return <FormControl key={index} {...field} data-sb-field-path={`.${index}`} />;
                })}
            </div>
            <div className={classNames('mt-4', styles.submitLabel?.textAlign ? mapStyles({ textAlign: styles.submitLabel?.textAlign }) : null)}>
                <button
                    type="submit"
                    className="sb-component sb-component-block sb-component-button sb-component-button-primary"
                    data-sb-field-path=".submitLabel"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    );
}
