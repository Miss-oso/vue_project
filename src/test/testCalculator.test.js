import MyCalculator from '../components/MyCalculator.vue';
import { mount } from '@vue/test-utils';

describe('Test Calculator', () => {
  
    it('Test first operand', () => {
        const wrapper = mount(MyCalculator);

        const operand1 = wrapper.find('input[name=operand1]');
        operand1.setValue('1');
        expect(wrapper.vm.operand1).toBe(1);
    });

  
    it('Test second operand', () => {
        const wrapper = mount(MyCalculator);

        const operand2 = wrapper.find('input[name=operand2]');
        operand2.setValue('5');
        expect(wrapper.vm.operand2).toBe(5);
    });

    
    it('Test Sum()', () => {
        const wrapper = mount(MyCalculator);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.element.value = '1';
        operand1.trigger('input');

        const operand2 = wrapper.find('input[name="operand2"]');
        operand2.setValue('3');
        const buttonSum = wrapper.find('button[name="+"]');
        buttonSum.trigger('click');

        expect(wrapper.vm.result).toBe(4);
    });

   
    it('Test Diff()', () => {
        const wrapper = mount(MyCalculator);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.element.value = '5';
        operand1.trigger('input');

        const operand2 = wrapper.find('input[name="operand2"]');
        operand2.setValue('3');
        const buttonDiff = wrapper.find('button[name="-"]');
        buttonDiff.trigger('click');

        expect(wrapper.vm.result).toBe(2);
    });

  
    it('Test Multiply()', () => {
        const wrapper = mount(MyCalculator);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.element.value = '5';
        operand1.trigger('input');

        const operand2 = wrapper.find('input[name="operand2"]');
        operand2.setValue('3');
        const buttonMultiply = wrapper.find('button[name="*"]');
        buttonMultiply.trigger('click');

        expect(wrapper.vm.result).toBe(15);
    });

   
    it('Test Divide()', async () => {
        const wrapper = mount(MyCalculator);

        await wrapper.find('input[name="operand1"]').setValue(8);

        await wrapper.find('input[name="operand2"]').setValue(2);

        await wrapper.find('button[name="/"]').trigger('click');

        expect(wrapper.vm.result).toBe(4);
    });

  
    it('Test Degree()', () => {
        const wrapper = mount(MyCalculator);

        const operand1 = wrapper.find('input[name="operand1"]');
        operand1.element.value = '4';
        operand1.trigger('input');

        const operand2 = wrapper.find('input[name="operand2"]');
        operand2.element.value = '2';
        operand2.trigger('input');

        const buttonDegree = wrapper.find('button[name="^"]');
        buttonDegree.trigger('click');

        expect(wrapper.vm.result).toBe(16);
    });

  
    it('Test intDivide()', async () => {
        const wrapper = mount(MyCalculator);

        await wrapper.find('input[name="operand1"]').setValue(8);
        const operand2 = await wrapper.find('input[name="operand2"]').setValue(2);

        /* wrapper.vm.$nextTick(); */

        await wrapper.find('button[name="int"]').trigger('click');

        expect(wrapper.vm.result).toBe(4);
    });

    // Тест выбора чекбокса и отрисовки экранной клавиатуры
    it('Test checkbox and visible virtual keyboard', async () => {
        const wrapper = mount(MyCalculator);
        

 
        const checkBox = wrapper.find('input[name="checkbox-keyboard"]');
        expect(checkBox.element.checked).toBe(false);

       
        const vKeyboard = wrapper.find('.keyboard');
        expect(vKeyboard.element).not.toBeVisible;

       
        await checkBox.setChecked(true);
        expect(checkBox.element.checked).toBe(true);

        await expect(vKeyboard.element).toBeVisible;

        // Проверяем радиокнопки переключения операндов и клавиши клавиатуры
        
        const radioButton1 = wrapper.find('input[id="operand1"]');
        expect(wrapper.vm.radioOperand1).toBe(true);

      
        const radioButton2 = wrapper.find('input[id="operand2"]');
        expect(wrapper.vm.radioOperand2).toBe(false);

        
        for (let i = 1; i <= 9; i++) {
            wrapper.find(`button[name="${i}"]`).trigger('click');
        }
      
        await expect(wrapper.vm.operand1).toBe(123456789);

      
        const backspace = wrapper.find('button[name="backspace"]');
      
        for (let i = 1; i <= 9; i++) {
            backspace.trigger('click');
        }
        
        await expect(wrapper.vm.operand1).toBe(0);

      
        await radioButton2.setChecked();
        
        await expect(wrapper.vm.picked).toBe('radio2');
        await expect(wrapper.vm.radioOperand2).toBe(true);

        
        await expect(wrapper.vm.radioOperand1).toBe(false);

       
        for (let i = 1; i <= 9; i++) {
            wrapper.find(`button[name="${i}"]`).trigger('click');
        }
        
        await expect(wrapper.vm.operand2).toBe(123456789);

        
        for (let i = 1; i <= 9; i++) {
            backspace.trigger('click');
        }
     
        await expect(wrapper.vm.operand2).toBe(0);

        await radioButton1.setChecked();
        
        await expect(wrapper.vm.picked).toBe('radio1');
        await expect(wrapper.vm.radioOperand1).toBe(true);

        
        await expect(wrapper.vm.radioOperand2).toBe(false);
    });
})