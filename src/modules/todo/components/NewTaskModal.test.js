import {mount} from '@vue/test-utils';
import NewTaskModal from './NewTaskModal.vue'

describe('NewTaskModal.vue', () => {
  test('El input debe permanecer en newTask', async () => {
    const wrapper = mount(NewTaskModal, {
      props: {
        newTask: {
          id: '',
          text: '',
          completed: false,
        },

      },
    });

    const task = {
      id: '',
      text: 'Comprar pan',
      completed: false,
    }
    const input = wrapper.find('#input_newTask');
    await input.setValue(task.text);
    expect(wrapper.vm.newTask.text).toBe('Comprar pan');

  })

})
