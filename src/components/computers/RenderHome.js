export const RenderHome = () => {
    return(
      <>
        <html className="mt-40">
          <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Custom Build PC</title>
            <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"/>
          </head>
          <body class="bg-gray-100">
            <div class="container mx-auto px-4 py-8">
              <h1 class="text-3xl font-bold mb-4">Custom Build PC</h1>
              <p class="text-lg mb-8">Welcome to Custom Build PC, the ultimate destination for picking the parts of your custom PC and sharing them with the community!</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src="https://via.placeholder.com/500x500" alt="Case Image" class="w-full h-56 object-cover"/>
                  <div class="px-6 py-4">
                    <h3 class="text-xl font-semibold mb-2">PC Case</h3>
                    <p class="text-gray-700 text-base">Choose from a wide range of PC cases to fit your build and your style!</p>
                    <a href="#" class="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">View Cases</a>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src="https://via.placeholder.com/500x500" alt="CPU Image" class="w-full h-56 object-cover"/>
                  <div class="px-6 py-4">
                    <h3 class="text-xl font-semibold mb-2">CPU</h3>
                    <p class="text-gray-700 text-base">Find the perfect processor for your build and unleash its power!</p>
                    <a href="#" class="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">View CPUs</a>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src="https://via.placeholder.com/500x500" alt="GPU Image" class="w-full h-56 object-cover"/>
                  <div class="px-6 py-4">
                    <h3 class="text-xl font-semibold mb-2">GPU</h3>
                    <p class="text-gray-700 text-base">Experience gaming and graphics like never before with a top-notch graphics card!</p>
                    <a href="#" class="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">View GPUs</a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      </>
    )
  }
  