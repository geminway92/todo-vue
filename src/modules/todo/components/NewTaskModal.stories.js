import results from '../../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
import NewTaskModal from './NewTaskModal.vue';

export default {
    title: "Todo Vue/createTask",
    component: NewTaskModal,
    decorators: [withTests ({results})],
    argTypes: {
        onInput:{action: `Add Task`},
        newTask: {
           control: { type: 'object'},
        },
        showIconPlus:{control :{type: 'boolean'}},
        openModal: { control: {type: 'boolean'}}
    }

};


const Template = (args) => ({
    components: {NewTaskModal},
    setup() {
        return { args }
    },
    template: '<NewTaskModal v-bind="args"/>',

});


export const Normal = Template.bind({})
Normal.args = {
    newTask: {
        id: '',
        text: '',
        completed: false,
    },
}

export const ValueDefect = Template.bind({})
ValueDefect.args = {
    newTask: {
        id: 're23',
        text: 'Empezar el día con buen pie',
        completed: false,
    },
}

