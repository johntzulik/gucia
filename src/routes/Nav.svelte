<script>
import {userbaseStore, userStore, promiseStore} from '../stores'

function signout() {
    $promiseStore = $userbaseStore.signOut().then(() => $userStore = null)
}
</script>

<header class="text-gray-600 body-font bg-orchid-200">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
        <span class="ml-3 text-xl">Counting loops</span>
      </a>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href="/" class="mr-5 hover:text-gray-900">Hello, {$userStore.username}!</a>
      </nav>
      <button on:click={signout}
      class="inline-flex items-center text-white bg-orchid-500 border-0 py-1 px-3 focus:outline-none hover:bg-orchid-600 rounded text-base mt-4 md:mt-0">
      Logout &nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
  </div>
</header>

