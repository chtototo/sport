<script setup>
import { RouterLink, RouterView } from "vue-router";

const share = () => {
  navigator.share({
      title: 'Мой сайт',
      text: 'Проверьте это!',
      url: window.location.href,
    })
}
</script>

<template>
  <div class="w-[1206px] flex flex-col justify-center">
    <!-- header -->
    <header
      class="w-full flex justify-between h-[120px] items-center relative box-border"
    >
      <div class="cursor-pointer">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="254"
            height="39"
            fill="none"
            viewBox="0 0 255 39"
            class=""
          >
            <path
              fill="#262633"
              d="M0 37.584h16.854c5.981 0 8.057-3.282 9.045-8.818l.544-3.037c.989-5.487-1.73-7.496-3.41-8.23 1.73-.441 4.35-1.764 5.041-5.83l.198-1.127c1.236-6.956-2.323-9.405-7.562-9.405H6.475L0 37.584Zm16.657-29.59c1.68 0 2.174.785 1.878 2.646l-.297 1.764c-.296 1.812-1.038 2.645-2.422 2.645h-2.075l1.285-7.054h1.63Zm-2.175 13.767c1.73 0 2.224 1.028 1.928 2.792l-.544 3.086c-.346 2.058-.89 2.841-2.52 2.841h-2.373l1.581-8.72h1.928Zm26.812 1.42h1.632c1.482 0 2.026.784 1.68 2.695l-1.631 9.013c-.198 1.225-.05 2.205.395 2.695h9.787l.05-.245c-.248-.637-.446-1.519-.199-2.988l1.681-9.406c.692-3.92-.642-5.879-2.768-6.957 2.373-.685 4.35-2.302 4.992-5.927l.396-2.156c1.136-6.172-2.126-8.768-6.92-8.768H35.314l-6.475 36.447h9.885l2.57-14.403Zm2.719-15.186h1.582c1.532 0 2.026.784 1.73 2.4l-.544 3.038c-.297 1.665-.989 2.302-2.373 2.302H42.63l1.384-7.74Zm30.178-6.858H63.96l-6.475 36.447h10.231l6.475-36.447Zm8.399 36.986c4.596 0 6.82-2.744 7.562-3.772.148.734.395 2.253.395 3.233h6.475l3.806-21.506H88.669l-1.235 6.907H90.3l-.79 4.36c-.347 1.91-1.038 3.233-2.719 3.233-1.73 0-2.471-1.224-2.125-3.135l2.866-16.264c.297-1.714.84-2.792 2.422-2.792 1.68 0 2.225 1.078 1.928 2.792l-.395 2.352h9.341l.494-2.793C102.41 4.615 99.246.598 90.696.598h-1.483C80.86.598 78.487 5.3 77.45 11.13l-2.867 16.117c-1.137 6.32 2.174 10.876 7.66 10.876h.347Zm33.827-.539h10.232l6.475-36.447h-10.232l-2.224 12.492h-4.152l2.225-12.492h-10.232l-6.475 36.447h10.232l2.471-14.01h4.152l-2.472 14.01Zm40.478-28.266 1.482-8.181h-20.956l-1.483 8.18h5.634l-4.992 28.267h9.638l5.042-28.266h5.635Zm9.428 18.615.543-3.037h-9.49l-.593 3.331c-1.137 6.369 2.373 9.896 10.578 9.896h1.433c10.132 0 12.406-6.369 12.406-12.15 0-4.065-2.471-6.907-5.536-9.65l-3.41-3.086c-1.285-1.127-2.175-2.009-2.175-3.38 0-1.421.692-2.352 2.323-2.352 1.433 0 2.175.686 1.829 2.547l-.346 1.91h9.391l.346-1.91c1.087-6.074-1.532-9.454-10.33-9.454h-1.335c-10.528 0-11.912 6.025-11.912 10.826 0 3.772 1.879 6.369 4.795 9.014l3.41 3.037c1.434 1.225 2.323 2.058 2.323 3.625 0 .882-.148 3.43-2.422 3.43-1.532 0-2.125-.833-1.828-2.597ZM200.19 1.137h-10.232l-6.474 36.447h10.231l6.475-36.447Zm-1.141 36.447h16.212c6.672 0 9.094-2.94 10.33-9.994l2.817-15.872c1.335-7.642-2.867-10.581-8.798-10.581h-14.086l-6.475 36.447ZM214.421 8.73h1.631c1.73 0 2.372.833 1.977 2.988l-2.669 14.941c-.396 2.303-.939 3.136-2.62 3.136h-2.076l3.757-21.065Zm21.004-7.593-6.475 36.447h19.177l1.533-8.475h-9.49l1.087-6.075h7.908l1.533-8.524h-7.909l.89-4.996h9.193l1.483-8.377h-18.93Z"
            ></path>
          </svg>
        </a>
      </div>
      <div class="flex h-[40px]">
        <div class="mr-[8px] w-[60px] box-border">
          <a href=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              class="Header-module__itemIcon__vxPZ"
            >
              <path
                fill-rule="evenodd"
                d="M33.333 10a3.333 3.333 0 0 1 3.334 3.333v6.922c0 1.63-1.178 3.02-2.786 3.288L16.76 26.396a3.333 3.333 0 0 1-3.764-2.41L8.727 8.332H5A1.667 1.667 0 1 1 5 5h3.727a3.333 3.333 0 0 1 3.216 2.456L12.637 10h20.696Zm0 10.255-17.121 2.853-2.666-9.775h19.787v6.922Z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#262633"
                d="M15 31.667a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Zm16.667 0a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
              ></path></svg
          ></a>
        </div>
        <div class="mr-[12px] w-[40px]">
          <a href=""
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              class="Header-module__itemIcon__vxPZ"
            >
              <path
                fill-rule="evenodd"
                d="M20 23.916c-5.417 0-8.333-5.29-8.333-11.208C11.667 6.916 15 3.333 20 3.333s8.333 3.583 8.333 9.375c0 5.917-2.916 11.208-8.333 11.208Zm0-3.333c2.899 0 5-3.081 5-7.875 0-3.965-1.87-6.042-5-6.042s-5 2.077-5 6.042c0 4.794 2.1 7.875 5 7.875Z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M8.233 36.663A1.667 1.667 0 0 0 9.997 35.1c.192-3.204 3.405-5.1 10.01-5.1 6.6 0 9.804 1.893 9.999 5.1a1.667 1.667 0 1 0 3.327-.201c-.325-5.362-5.182-8.233-13.327-8.233-8.148 0-13.015 2.873-13.336 8.234a1.667 1.667 0 0 0 1.563 1.763Z"
              ></path></svg
          ></a>
        </div>
      </div>
    </header>
    <!-- content -->
    <div class="relative">
      <div class="relative">
        <div class="">
          <img
            src="https://split.s3.yandex.net/assets/images/banner1.1e8ea25a8ed59c4b.png"
            alt="slide 0"
            class=""
          />
        </div>
        <div
          class="absolute flex justify-center items-center bottom-[10px] w-[100%]"
        >
          <div
            class="rounded-[50%] mx-[5px] inline-block cursor-pointer w-[10px] h-[10px] duration-[.6s] bg-[#262633]"
          ></div>
          <div
            class="rounded-[50%] mx-[5px] inline-block cursor-pointer w-[10px] h-[10px] duration-[.6s] bg-[rgba(0,0,0,.3)]"
          ></div>
          <div
            class="rounded-[50%] mx-[5px] inline-block cursor-pointer w-[10px] h-[10px] duration-[.6s] bg-[rgba(0,0,0,.3)]"
          ></div>
          <div
            class="rounded-[50%] mx-[5px] inline-block cursor-pointer w-[10px] h-[10px] duration-[.6s] bg-[rgba(0,0,0,.3)]"
          ></div>
        </div>
      </div>
      <!-- products -->
      <div class="lg:w-[100%] relative">
        <div class="flex w-full items-center justify-center mt-[50px]">
          <div class="w-fit text-black">
            <img onclick="share" class="hover:opacity-[.8] cursor-pointer" src="./components/share.png" alt="">
          </div>
        </div>
        <div class="w-[100%] relative lg:px-[8px] box-border block">
          <div class="flex flex-col pt-[40px] w-[100%]">
            <div class="mb-[20px] flex flex-col justify-center">
              <p class="text-[20px] color-[#262633]">Популярное</p>
            </div>
            <div
              class="grid gap-[13px] grid-cols-[repeat(4,1fr)] lg:grid-cols-[repeat(2,48.5%)] lg:gap-[11px]"
            >
              <!-- product -->

              <!-- 1 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/book.7efaa5315ed73b9c.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px] mt-[24px] mx-[20px] mb-[20px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Revue Faire журнал
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      2700&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)] lg:rounded-[8px] lg:bottom-0 lg:h-[36px] lg:mx-[20px] lg:mt-0 lg:mb-[20px] lg:relative lg:right-0 lg:w-calc"
                >
                  <button>
                    <span
                      class="hidden lg:block lg:text-[12px] lg:leading-[1.1]"
                      >В корзину</span
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="lg:hidden"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 2 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/luggage.42e5962406046205.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Чемодан ПРО
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      16700&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 3 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/duck.78fbf7e7c96edd85.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Игрушка коллекционная
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      904&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 4 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/umbrella.c925e1dc5a24ed38.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Зонт Coil
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      912&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 5 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/bag.7679fce61f340c2b.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Шоппер
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      1070&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 6 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/glasses.2fd4082bf95d69e7.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Спортивные очки
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      2430&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 7 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/t-shirt.78c05d547f77e948.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      Футболка Яндекс
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      2804&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- 8 -->
              <div
                class="relative bg-[#f6f6f8] rounded-[24px] font-normal h-[450px] justify-between leading-[1.1] lg:h-fit"
              >
                <a href="">
                  <div
                    class="lg:px-[4px] lg:pt-[8px] lg:pb-0 flex lg:justify-center"
                  >
                    <img
                      src="https://split.s3.yandex.net/assets/images/3d-printer.95a16b2dc84d79c9.png"
                      alt="Revue Faire журнал"
                      class="lg:h-[158px]"
                    />
                  </div>
                  <div
                    class="flex flex-col mt-[24px] mx-[20px] mb-[20px] lg:mx-[21px] lg:mt-[7px] lg:mb-[16px]"
                  >
                    <div class="text-[16px] mb-[16px] lg:h-[38px] lg:mb-[8px]">
                      3D-принтер
                    </div>
                    <div
                      class="text-[32px] mb-[8px] lg:text-[22px] lg:mb-[8px]"
                    >
                      13500&nbsp;₽
                    </div>
                  </div>
                </a>
                <div
                  class="absolute right-[20px] bottom-[20px] bg-white h-[64px] w-[64px] rounded-[17px] cursor-pointer flex justify-center items-center hover:bg-[rgba(0,0,0,.05)]"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="25"
                      fill="none"
                      viewBox="0 0 34 25"
                      class="ButtonCart-module__icon__twgH"
                    >
                      <g clip-path="url(#CartIcon_svg__a)">
                        <path
                          fill="#000"
                          fill-opacity="0.3"
                          d="M28.699 4.242h-17.78l-.573-2.1A2.753 2.753 0 0 0 7.691.113H4.613a1.376 1.376 0 1 0 0 2.753H7.69l3.525 12.926a2.753 2.753 0 0 0 3.108 1.99l14.14-2.356a2.753 2.753 0 0 0 2.3-2.715V6.307c0-1.14-.925-2.065-2.065-2.065Zm-18.58 20.645a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Zm13.763 0a2.753 2.753 0 1 0 0-5.505 2.753 2.753 0 0 0 0 5.505Z"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="CartIcon_svg__a">
                          <path
                            fill="#fff"
                            d="M.484.113h33.032v24.774H.484z"
                          ></path>
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer
      class="relative mt-[300px] flex justify-center items-center box-border h-[120px]"
    >
      <div
        class="absolute self-center left-0 text-[rgba(0,0,0,.3)] text-[16px]"
      >
        @2023 Brightside
      </div>
      <div class="relative flex items-center justify-center w-[600px]">
        <div class="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="20"
            fill="none"
            viewBox="0 0 35 20"
            class="mr-[20px]"
          >
            <path
              fill="#EB001B"
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
            ></path>
            <path
              fill="#F79E1B"
              d="M24.283 20c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
            ></path>
            <path
              fill="#FF5F00"
              fill-rule="evenodd"
              d="M17.14 2.998a9.967 9.967 0 0 0-2.857 6.998 9.968 9.968 0 0 0 2.857 6.998 9.968 9.968 0 0 0 2.856-6.998 9.967 9.967 0 0 0-2.856-6.998Z"
              clip-rule="evenodd"
            ></path></svg
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="16"
            fill="none"
            viewBox="0 0 45 16"
            class="mr-[20px]"
          >
            <path
              fill="#3CA436"
              fill-rule="evenodd"
              d="m10.143 9.454 2.075-7.351C12.57.857 13.687 0 14.955 0h4.976v16h-4.982V6.546h-.356L11.744 16H8.185L5.338 6.546h-.356V16H0V0h4.976C6.244 0 7.36.857 7.71 2.103l2.076 7.351h.356Zm16.943 6.501h-4.967V.117h4.967v15.838ZM41.3 10.6l3.523 5.362h-5.676l-2.603-5.041h-2.373v5.04h-4.957V7.32h15.3A5.376 5.376 0 0 1 41.3 10.6ZM28.502.117c.667 3.686 3.846 6.48 7.671 6.48h8.54c.07-.35.108-.71.108-1.08 0-2.982-2.383-5.4-5.322-5.4H28.502Z"
              clip-rule="evenodd"
            ></path></svg
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="49"
            height="16"
            fill="none"
            viewBox="0 0 49 16"
            class="mr-[20px]"
          >
            <path
              fill="#067AFF"
              fill-rule="evenodd"
              d="M25.086 5.115C25.108 2.104 27.835 0 31.709 0c1.51 0 2.723.336 3.667.686l-.689 3.281c-1.754-.824-3.303-.766-3.864-.692-1.133.151-1.65.741-1.663 1.296-.038 1.825 5.51 2.05 5.492 6.134C34.639 13.923 31.946 16 27.828 16c-1.753-.019-3.444-.393-4.36-.822l.71-3.391c.912.433 2.056 1.009 4.026.977 1.128-.018 2.335-.475 2.346-1.514.006-.678-.506-1.165-2.032-1.923-1.486-.741-3.458-1.983-3.432-4.212ZM42 .28h3.345l3.164 15.475h-3.625l-.473-2.312h-5.029l-.817 2.312h-4.116l5.882-14.34A1.784 1.784 0 0 1 42 .281Zm.575 4.184-2.063 5.81h3.25l-1.187-5.81ZM20.102.28h3.919l-3.242 15.475h-3.92L20.102.281ZM14.3.28h4.117l-6.35 15.475H7.922L4.798 3.406c-.19-.76-.354-1.04-.93-1.359C2.924 1.524 1.367 1.034 0 .73L.092.28h6.67c.85 0 1.615.578 1.808 1.578l1.65 8.955L14.3.28Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="absolute self-center right-0 text-[rgba(0,0,0,.3)] text-[16px]"
      >
        Политика конфиденциальности
      </div>
    </footer>
  </div>
</template>