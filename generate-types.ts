import { Field, FieldEnum, FieldEnumOptionObject, FieldList, FieldListItems, FieldReference, FieldEnumOptionValue, Model } from '@stackbit/types';
import { allModels } from './.stackbit/models';

const baseType = 'BaseContentObject';
const imports = [`import { ${baseType} } from './base';`];
const pageContentFieldName = 'markdownContent';

imports.forEach((line) => {
    console.log(line);
});
console.log('');

type ClassifierFn = (model: Model) => string[] | string | undefined;
function classifyModels(fn: ClassifierFn, stringifyNames: boolean = false) {
    let classes: Record<string, string[]> = {};
    allModels.forEach((model) => {
        let modelClasses = fn(model);
        if (modelClasses) {
            if (!Array.isArray(modelClasses)) modelClasses = [modelClasses];
            modelClasses.forEach((cls) => {
                if (!classes[cls]) classes[cls] = [];
                classes[cls].push(model.name);
            });
        }
    });

    Object.entries(classes).map(([className, models]) => {
        if (stringifyNames) models = models.map((e) => "'" + e + "'");
        if (stringifyNames) {
            console.log(`export const ${className} = [${models.join(', ')}];`);
        } else {
            console.log(`export type ${className} = ${models.join('|')};`);
        }
    });
}

classifyModels((model) => {
    const classes = { data: 'DataModelType', page: 'PageModelType' };
    return classes[model.type];
});
console.log('');

classifyModels((model) => {
    const classes = { data: 'DATA_MODEL_NAMES', page: 'PAGE_MODEL_NAMES' };
    return classes[model.type];
}, true);
console.log('');

classifyModels((model) => {
    return model.groups;
});
console.log('');

console.log(`export type ContentObject = ${allModels.map((m) => m.name).join('|')};\n`);

console.log(`export type ContentObjectType = ${allModels.map((m) => "'" + m.name + "'").join('|')};\n`);

function fieldToVarType(field: Field | FieldListItems): string | null {
    switch (field.type) {
        case 'string':
        case 'color':
        case 'date':
        case 'datetime':
        case 'file':
        case 'image':
        case 'markdown':
        case 'richText':
        case 'html':
        case 'slug':
        case 'url':
            return 'string';
        case 'json':
            return 'object';
        case 'style':
            return 'any';
        case 'reference':
        case 'model':
            const refField = field as FieldReference;
            return refField.models.concat(refField.groups || []).join('|');
        case 'list':
            let itemType = fieldToVarType((field as FieldList).items);
            if (!itemType) return null;
            if (itemType.includes('|')) itemType = '(' + itemType + ')';
            return itemType + '[]';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'enum':
            const enumOptions = (field as FieldEnum).options;
            return enumOptions
                .map((opt: FieldEnumOptionValue | FieldEnumOptionObject) => {
                    let optValue = typeof opt === 'object' ? opt.value : opt;
                    if (typeof optValue === 'string') optValue = '"' + optValue + '"';
                    return optValue;
                })
                .join('|');
        case 'object':
        case 'cross-reference':
        default:
            return null;
    }
}

allModels.forEach((model) => {
    console.log(`export type ${model.name} = ${baseType} & {`);
    console.log(`    type: '${model.name}';`);

    const properties = model.fields.map((field) => {
        const varType = fieldToVarType(field);
        if (varType) {
            console.log(`    ${field.name}${field.required ? '' : '?'}: ${varType};`);
        } else {
            console.warn('*** Field type not supported:', field, 'in: ', model.name);
        }
    });

    if (model.type === 'page' && !model.hideContent) {
        console.log(`    ${pageContentFieldName}: string;`);
    }
    console.log('}\n');
});
