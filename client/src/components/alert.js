import { h } from 'hyperapp'

export default {
    state: {
      showAlert: false,
      message: 'Heads Up!',
      status: 'success',
    },
    actions: {
      show: ({message, status}) => state => ({ showAlert: true, message: message, status: status, }),
      remove: state => ({ showAlert: false }) 
    },
    view: (state, actions) => ({path}) => {
        let color = {success: 'green', error: 'red', warning: 'yellow'}[state.status]
         
        return (       
            <div>
                { (
                    state.showAlert && 
                    (
                    <div class="alert-footer w-full fixed bottom-0" style="z-index:9009">
                        <div class="flex  items-center justify-between bg-green-400 w-full shadow">
                            <div class="w-16 bg-green">
                                <div class="p-4">
                                    <svg class="h-8 w-8 text-white fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M468.907 214.604c-11.423 0-20.682 9.26-20.682 20.682v20.831c-.031 54.338-21.221 105.412-59.666 143.812-38.417 38.372-89.467 59.5-143.761 59.5h-.12C132.506 459.365 41.3 368.056 41.364 255.883c.031-54.337 21.221-105.411 59.667-143.813 38.417-38.372 89.468-59.5 143.761-59.5h.12c28.672.016 56.49 5.942 82.68 17.611 10.436 4.65 22.659-.041 27.309-10.474 4.648-10.433-.04-22.659-10.474-27.309-31.516-14.043-64.989-21.173-99.492-21.192h-.144c-65.329 0-126.767 25.428-172.993 71.6C25.536 129.014.038 190.473 0 255.861c-.037 65.386 25.389 126.874 71.599 173.136 46.21 46.262 107.668 71.76 173.055 71.798h.144c65.329 0 126.767-25.427 172.993-71.6 46.262-46.209 71.76-107.668 71.798-173.066v-20.842c0-11.423-9.259-20.683-20.682-20.683z"/><path d="M505.942 39.803c-8.077-8.076-21.172-8.076-29.249 0L244.794 271.701l-52.609-52.609c-8.076-8.077-21.172-8.077-29.248 0-8.077 8.077-8.077 21.172 0 29.249l67.234 67.234a20.616 20.616 0 0 0 14.625 6.058 20.618 20.618 0 0 0 14.625-6.058L505.942 69.052c8.077-8.077 8.077-21.172 0-29.249z"/></svg>
                                </div>
                            </div>
                            <div class="w-auto text-grey-darker items-center p-4">
                                <span class="leading-tight text-lg font-bold pb-4 inline">
                                    {state.message}
                                </span>
                            </div>
                            <label class="close cursor-pointer mr-6" title="close" for="footeralert">
                                <svg  onclick={actions.remove} class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </label>
                        </div>
                    </div> 
                    )

                )
                }
            </div> 


        )
    }
}
