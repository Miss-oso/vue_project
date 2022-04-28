export default {
    install(Vue) {
      
      if(this.installed) {
        return 
      }
  
      this.install = true
  
      Vue.prototype.$modal= {
        
        EventBus: new Vue(),
  
        show(name, settings) {
          this.EventBus.$emit('shown', {name, ...settings})
          console.log('show')
        },
  
        hide(){
          this.EventBus.$emit('hide')
          console.log('hide')
        }
      }
    }
  }