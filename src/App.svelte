<script>
	import Tailwindcss from './Tailwindcss.svelte';
    import Router from 'svelte-spa-router'
    import SignUp from './routes/SignUp.svelte'
    import SignIn from './routes/SignIn.svelte'
    import Nav from './routes/Nav.svelte'
    import HomePage from './routes/HomePage.svelte'
    import Content from './routes/Content.svelte'
    import Loading from './routes/Loading.svelte'
    
    import Button from './components/Button.svelte'
    import Input from './components/Input.svelte'
    import Select from './components/Select.svelte'
    
    import ForgotPassword from './routes/ForgotPassword.svelte'
    import {userbaseStore, userStore, promiseStore,vuelta} from './stores'
    import A from './components/A.svelte';

	const userbase = window.userbase
    window.userbase = null

    // stores
    $userbaseStore = userbase
    $userStore = null

    $promiseStore = userbase.init({appId: '24b5345b-423b-4ff0-a629-46b2d6c04dd0'})
        .then((session) => $userStore = session.user)

        
    export let todos = [], newTodo = '';
    export let vueltas = [], newVuelta = '', piloto
    export let tiempoTotal=0, gasTotal = 100, neumaticoTotal1 = 100,neumaticoTotal2 = 100,neumaticoTotal3 = 100,neumaticoTotal4 = 100
    const databaseName = 'vueltas';
    //const databaseName = 'todos';
    function changeHandler(items) {todos = items}
    $: if ($userStore) $promiseStore = $userbaseStore.openDatabase({databaseName, changeHandler})

    function addTodo() {
      $promiseStore = $userbaseStore.insertItem({databaseName, item: newTodo})
        newTodo = '';
    }
    function deleteTodo(itemId) {
      $promiseStore = $userbaseStore.deleteItem({databaseName, itemId});
    }
    function updateTodo(index) {
      const {item, itemId} = todos[index];
      $promiseStore = $userbaseStore.updateItem({databaseName, itemId, item});
    }
    $: console.log($userStore)
    
    function agregarVuelta(){
        console.log("empezando")
        newVuelta={
            'piloto': piloto,
            'gasolina': $vuelta.gasolina,
            'dsgtn1':$vuelta.dsgtn1,
            'dsgtn2':$vuelta.dsgtn2,
            'dsgtn3':$vuelta.dsgtn3,
            'dsgtn4':$vuelta.dsgtn4,
            'tiempo': $vuelta.tiempo,
        }
        tiempoTotal += $vuelta.tiempo
        console.log("tenemos el newVuelta") 
        $promiseStore = $userbaseStore.insertItem({databaseName, item: newVuelta})
        //newVuelta = '';
        console.log("vuelta insertada")
    }
    $: console.log(tiempoTotal);
    function borrrarVuelta(itemId) {
      $promiseStore = $userbaseStore.deleteItem({databaseName, itemId});
    }
    function actualizarVuelta(index){
        const {item, itemId} = vueltas[index];
      $promiseStore = $userbaseStore.updateItem({databaseName, itemId, item});
    }
</script>

<Tailwindcss />


    {#await $promiseStore.then(() => Promise.reject())}
    <Loading />
    {:catch error}
        {#if error}
            <strong class="text-red-700 font-bold">ERROR! {error} </strong>
        {/if}
        {#if $userStore}
            <Nav />
            <Content title="Agregar vuelta">
                <span slot="piloto">
                    <Select label="Seleccione un piloto" 
                        options={$vuelta.pilotos}
                        display_func={o => o.name}
                        bind:value={piloto} required/>
                </span>
                <span slot="gasolina">
                    <Input label="Gasolina" bind:value={$vuelta.gasolina} type="text" required />
                </span>
                <span slot="dsgtn1">
                    <Input label="Desgaste neumatico 1" bind:value={$vuelta.dsgtn1} type="text" required />
                </span>
                <span slot="dsgtn2">
                    <Input label="Desgaste neumatico 2" bind:value={$vuelta.dsgtn2} type="text" required />
                </span>
                <span slot="dsgtn3">
                    <Input label="Desgaste neumatico 3" bind:value={$vuelta.dsgtn3} type="text" required />
                </span>
                <span slot="dsgtn4">
                    <Input label="Desgaste neumatico 4" bind:value={$vuelta.dsgtn4} type="text" required />
                </span>
                <span slot="tiempo">
                    <Input label="Tiempo" bind:value={$vuelta.tiempo} type="text" required />
                </span>
                <span slot="boton">
                    <button on:click={()=>agregarVuelta()} class="flex mx-auto text-white bg-indigo-500 
                    border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 
                    rounded text-lg">Agregar Vuelta</button>
                </span>
                
            </Content>
                
                <HomePage >
                    {#each todos as {item, itemId}, index}
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                              <img alt="{index+1}" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" 
                              src="https://dummyimage.com/50x50/ffffff/000000.png&text={index+1} {todos[index].item.piloto.name}">
                              <div class="flex-grow">
                                <p class="text-gray-900 title-font font-medium">
                                    G:<b>{todos[index].item.gasolina}</b>
                                    T:<b>{todos[index].item.tiempo}</b>
                                </p>
                                <p class="text-gray-900 title-font font-medium">
                                    GR:<b>{todos[index].item.gasolina-100}</b>
                                    T:<b>{todos[index].item.tiempo}</b>
                                </p>
                              </div>
                              <div class="flex-grow">
                                <p class="text-gray-500">
                                    N1:<b>{todos[index].item.dsgtn1}</b>
                                    N2:<b>{todos[index].item.dsgtn2} </b>
                                    N3:<b>{todos[index].item.dsgtn3} </b>
                                    N4:<b>{todos[index].item.dsgtn4}</b></p>
                                <p class="text-gray-500">
                                    NR1:<b>{todos[index].item.dsgtn1-100}</b>
                                    NR2:<b>{todos[index].item.dsgtn2-100} </b><br />
                                    NR3:<b>{todos[index].item.dsgtn3-100} </b>
                                    NR4:<b>{todos[index].item.dsgtn4-100}</b></p>
                              </div>
                              <div class="flex-grow">
                                <button on:click={()=>borrrarVuelta(itemId)} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                    {/each}
                </HomePage>
        {:else}
        <div class="container flex flex-col justify-center items-center w-screen h-screen mx-auto">
            <Router routes={{
                //'/': SignUp,
                '/': SignIn,
                //'/forgotpassword': ForgotPassword
            }} />
        </div>
        {/if}
    {/await}
