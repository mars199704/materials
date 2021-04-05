

let console = {
    isDev:false,
    log(...args) {
      if(!this.isDev) return
      window.console.log(...args)
    }
  }