<script>
export let title
</script>
<section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{title}</h1>
      </div>
      <div class="p-2 w-full">
        <div class="relative">
          <slot name="piloto" />
        </div>
      </div>
      <div class="p-2 w-1/2 float-left" >
        <div class="relative">
            <slot name="gasolina" />
        </div>
      </div>
      <div class="p-2 w-1/2 float-left">
        <div class="relative">
          <slot name="tiempo" />
        </div>
      </div>
      <div class="p-2 w-1/2 float-left">
        <div class="relative">
          <slot name="dsgtn1" />
        </div>
      </div>
      <div class="p-2 w-1/2 float-left">
        <div class="relative">
          <slot name="dsgtn2" />
        </div>
      </div>
      <div class="p-2 w-1/2 float-left">
        <div class="relative">
          <slot name="dsgtn3" />
        </div>
      </div>
      <div class="p-2 w-1/2 float-left">
        <div class="relative">
          <slot name="dsgtn4" />
        </div>
      </div>

      <div class="p-2 w-full">
        <slot name="boton" />
      </div>
    </div>
</section>