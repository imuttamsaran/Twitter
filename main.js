// import './java.js'
import "./index.css";

  
document.querySelector("#app").innerHTML = `
<div class="container-outer w-full mobile:flex mobile:justify-center max-w-1/2 m-auto">
<div class="container flex">
    <div
        class="hidden mobile:flex flex-col justify-between items-center min-h-screen border-r border-solid  border-slate-600 lg:w-[30%] px-3 lg:px-0">
        <ul class="flex flex-col lg:items-baseline  top-0  sticky">
            <li class="m-3 font-extrabold "><a href="/"><i class="fa-brands fa-twitter text-4xl"></i></a></li>
            <li class="links"><a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                        class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                    </svg><span class="mx-2  hidden lg:inline">Home</span></a></li>
            <li class="links"><a href="/explore.html"> <svg xmlns="http://www.w3.org/2000/svg" width="28"
                        height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg><span class="mx-2  hidden lg:inline">Explore</span></a></li>
            <li class="links"><a href="/notification.html"> <svg xmlns="http://www.w3.org/2000/svg" width="28"
                        height="28" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                        <path
                            d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg><span class="mx-2  hidden lg:inline">Notification</span></a>
            </li>
            <li class="links"><a href="/inbox.html"> <svg xmlns="http://www.w3.org/2000/svg" width="28"
                        height="28" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg> <span class="mx-2  hidden lg:inline">Message</span></a>
            </li>
            <li class="links"><a href="/profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="28"
                        height="28" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg><span class="mx-2  hidden lg:inline">Profile</span></a></li>
            <li class="links hidden md:flex"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="28"
                        height="28" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg><span class="mx-2  hidden lg:inline">Bookmark</span></a></li>
            <li class="links hidden md:flex"><a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="28"
                        height="28" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                        <path
                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                        <path
                            d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg><span class="mx-2  hidden lg:inline">List</span></a></li>
            <li class="links"><a href="">
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28" fill="currentColor">
                        <g>
                            <circle cx="17" cy="12" r="1.5"></circle>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="7" cy="12" r="1.5"></circle>
                            <path
                                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z">
                            </path>
                        </g>
                    </svg>
                    <span class="mx-2  hidden lg:inline">More</span></a></li>
            <li
                class="m-3 bg-tweets text-center rounded-full p-4 lg:rounded-full lg:w-56 lg:py-2 flex justify-center">
                <a href="">
                    <svg viewBox="0 0 24 24" aria-hidden="true" width="28" height="28" fill="currentColor"
                        class="lg:hidden">
                        <g>
                            <path
                                d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z">
                            </path>
                        </g>
                    </svg>
                    <span class="  hidden lg:inline mx-2">Tweet</span></a>
            </li>
        </ul>
        <ul class=" bottom-0  sticky">
            <li class="p-2 hover:bg-neutral-900 rounded-3xl w-full"><a href="">
                    <div class="accounts flex items-center w-full">
                        <div class="profile-pic">
                            <img src="/img/uttam.jpg" alt="profile image " class="rounded-full w-16 lg:w-32">
                        </div>
                        <div
                            class="user-name flex-col justify-center items-center w-full mx-2 text-xs  hidden lg:flex">
                            <h4 class="font-bold m-0 text-tiny lg:text-lg">Uttam Saran</h4>
                            <p class="m-0 text-tiny lg:text-lg opacity-60">@imuttamsaran</p>
                        </div>
                        <div class=" hidden lg:inline lg:text-2xl ">...</div>
                    </div>
                </a></li>
        </ul>
    </div>
    <main class="lg:max-w-[80%] relative w-full">
        <nav class="hidden mobile:block bg-nav sticky top-0  right-0 w-full">
            <ul class="flex justify-between p-3">
                <li class="text-lg">
                    <h4 class="font-bold">Latest Tweets</h4>
                </li>
                <li><a href="">
                        <svg viewBox="0 0 24 24" width="20" height="25" fill="currentColor" aria-hidden="true"
                            class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
                            style="color: rgb(239, 243, 244);">
                            <g>
                                <path
                                    d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                                </path>
                            </g>
                        </svg>
                    </a></li>
            </ul>
        </nav>
        <nav class="mobile:hidden fixed top-0 w-full bg-nav z-50">
            <ul class="flex justify-between px-3 py-1 items-center">
                <div id="myNav" class="overlay z-50">
                    <li class="hide"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><img
                                class="rounded-full w-12" src="/img/uttam.jpg" alt=""></a>
                    </li>
                    <ul class="mt-20 px-4">
                        <h1 class="font-bold text-xl">Uttam Saran</h1>
                        <h1 class="text-slate-500">@imuttamsaran</h1>
                    </ul>
                    <ul class="px-4 ">
                        <div class="flex mt-2">
                            <p class="hover:underline cursor-pointer mr-3">23 <span
                                    class="text-slate-500">Following</span></p>

                            <p class="hover:underline cursor-pointer">35 <span
                                    class="text-slate-500">Followers</span>
                            </p>
                        </div>
                    </ul>
                    <hr class="border-none h-hr bg-slate-600 mt-2 mb-1">
                    <hr class="border-none h-hr bg-slate-600">
                    <ul
                        class="overlay-content flex-col justify-between items-center border-r border-solid  border-slate-600 px-3">

                        <ul class="flex flex-col lg:items-baseline relative">

                            <li class="links"><a href="/profile.html">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                          </svg><span
                                        class="mx-2 lg:inline">Profile</span></a></li>
                            <li class="links"><a class="!flex items-center" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25"
                                        fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
                                        <path
                                            d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path
                                            d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                    <span class="mx-2  lg:inline">Topics</span></a></li>
                            <li class="links"><a href="/"><i class="fa-regular fa-bookmark"></i><span
                                        class="mx-2  lg:inline">Bookmarks</span></a>
                            </li>
                            <li class="links"><a class="!flex items-center" href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25"
                                        fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
                                        <path
                                            d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                                    </svg> <span class="mx-2">Moments</span></a>
                            </li>
                            <li class="links"><a class="!flex items-center" href="/"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="25"
                                        fill="currentColor" class="bi bi-cash-stack" viewBox="0 0 16 16">
                                        <path
                                            d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                                        <path
                                            d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z" />
                                    </svg>
                                    <span class="mx-2   lg:inline">Monetisation</span></a></li>
                            <hr class="border-none h-hr bg-slate-600">
                            <li class="links md:block"><a class="!flex items-center" href="/">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" width="20" height="25"
                                        fill="currentColor">
                                        <g>
                                            <path
                                                d="M6.016 16.97l-1.53 1.53c-.15.14-.34.22-.53.22s-.38-.08-.53-.22c-.29-.29-.29-.77 0-1.06l1.53-1.54c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.07zm2.12 2.12l-3.64 3.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06l3.64-3.64c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.06z">
                                            </path>
                                            <path
                                                d="M22.306 1.49c-.28-.28-.66-.44-1.06-.44 0 0-.09 0-.13.01-4.31.38-8.37 2.32-11.4 5.45h-.01c-2.68.54-5.12 1.86-7.09 3.84l-.93.93c-.46.47-.57 1.18-.27 1.76.27.5.78.8 1.33.8.09 0 .18-.01.27-.03l3.98-.73c.59.97 2.26 2.87 3.82 3.78l-.73 4.05c-.12.64.2 1.29.78 1.59.22.12.46.17.69.17.4 0 .78-.15 1.07-.44l.94-.94c1.96-1.99 3.27-4.48 3.8-7.21l.07-.06c0-.01.04-.04.04-.05 3.01-3.03 4.88-7.04 5.27-11.29.04-.44-.12-.88-.44-1.19zm-5.89 11.43c-.15.14-.3.28-.44.42v.02c-.41 2.6-1.63 5-3.48 6.87l-.93.94.88-4.89c.04-.22-.08-.42-.28-.52-1.03-.5-3.65-2.87-4.12-3.97-.09-.23-.32-.37-.56-.33l-4.74.88.93-.94c1.85-1.85 4.23-3.09 6.79-3.5.14-.17.3-.33.46-.48 2.88-2.9 6.55-4.53 10.32-4.87-.34 3.77-1.95 7.47-4.83 10.37z">
                                            </path>
                                            <path
                                                d="M17.546 6.36c-.88-.88-2.3-.88-3.18 0s-.88 2.31 0 3.18c.88.88 2.3.88 3.18 0 .88-.87.88-2.3 0-3.18zm-1.06 2.12c-.29.3-.77.3-1.06 0-.29-.29-.29-.77 0-1.06.29-.29.77-.29 1.06 0s.29.77 0 1.06z">
                                            </path>
                                        </g>
                                    </svg> <span class="mx-2   lg:inline">Twitter for Professionals</span></a>
                            </li>
                            <hr class="border-none h-hr bg-slate-600">
                            <li
                                class=" m-0 py-2 hover:bg-linkColor rounded-none text-lg flex justify-start md:block">
                                <a href="/"><span class="mx-2  lg:inline">Setting and privacy</span></a>
                            </li>
                            <li class=" m-0 py-2 hover:bg-linkColor rounded-none text-lg flex justify-start"><a
                                    href="">
                                    <span class="mx-2  lg:inline">Help Center</span></a>
                            </li>
                            <ul class="flex justify-between px-2 ">
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30"
                                            fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                            <path
                                                d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30"
                                            fill="currentColor" class="bi bi-qr-code-scan" viewBox="0 0 16 16">
                                            <path
                                                d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0v-3Zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5ZM.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5Zm15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5ZM4 4h1v1H4V4Z" />
                                            <path d="M7 2H2v5h5V2ZM3 3h3v3H3V3Zm2 8H4v1h1v-1Z" />
                                            <path d="M7 9H2v5h5V9Zm-4 1h3v3H3v-3Zm8-6h1v1h-1V4Z" />
                                            <path
                                                d="M9 2h5v5H9V2Zm1 1v3h3V3h-3ZM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8H8Zm2 2H9V9h1v1Zm4 2h-1v1h-2v1h3v-2Zm-4 2v-1H8v1h2Z" />
                                            <path d="M12 9h2V8h-2v1Z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </ul>

                    </ul>
                </div>
                <span onclick="openNav()" style="font-size:30px;cursor:pointer"><img class="rounded-full w-12"
                        src="/img/uttam.jpg" alt="">
                </span>
                <li><a href=""><img class="rounded-full w-12" src="/img/logo-twitter.png" alt=""></a></li>
                <li class="text-3xl"><a href="">
                        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
                            <g>
                                <path
                                    d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
        <nav class="mobile:hidden fixed bottom-0 w-full bg-black z-10">
            <ul class="flex justify-between p-3 items-center border-t  border-slate-600">
                <li class="text-3xl"><a href="/index.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path
                                d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                        </svg>
                    </a></li>
                <li class="text-3xl"><a href="/explore.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </a>
                </li>
                <li class="text-3xl"><a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-mic" viewBox="0 0 16 16">
                            <path
                                d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                        </svg></a></li>
                <li class="text-3xl"><a href="/notification.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-bell" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                    </a></li>
                <li class="text-3xl"><a href="/inbox.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                            class="bi bi-envelope" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg> </a>
                </li>
            </ul>
        </nav>
        <div class="newbtn fixed bottom-24 right-8 mobile:hidden  bg-blue-500 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </div>
        <div class="hidden mobile:block new-tweet max-w-xs lg:max-w-[100%] m-4 mobile:pt-0">
            <div class="flex justify-center items-start">
                <div class="w-12">
                    <img class="rounded-full" src="/img/uttam.jpg" alt="">
                </div>
                <div class="w-full m-3">
                    <textarea
                        class="w-full resize-none bg-black outline-none border-0 border-b border-slate-400"
                        name="tweet" id="tweet" rows="2" placeholder="What's happening?"></textarea>

                    <div class=" flex items-center justify-between">
                        <div class="icon mt-2 flex uitcx">
                            <span class="relative">
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="22px" height="22px" fill="currentColor" class="i-r3et5"><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                                <input class="file_upload  cursor-pointer" type="file">
                            </span>
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="22px" height="22px" fill="currentColor" class="i-r3et5"><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true" width="22px" height="22px" fill="currentColor" class="i-r3et5"><g><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path><path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path><circle cx="14.738" cy="9.458" r="1.478"></circle><circle cx="9.262" cy="9.458" r="1.478"></circle></g></svg>
                        </div>
                        <div
                            class="m-3 bg-tweets text-white font-bold opacity-70 text-center rounded-full p-2 w-20">
                            <span class="">Tweet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-none h-hr bg-slate-600">
        <div class="tweet-container  pt-16 mobile:pt-0">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/pratham-p.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Pratham</span>
                                <span class="opacity-60">@Prathkum</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">Jul 28, 2021</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">HOLY SHIT!!!!! 🤩🤩
                                <br>
                                I GOT A FULL TIME REMOTE JOB.
                                <br>
                                I've joined RapidAPI (
                                <span class="text-blue-600"> @Rapid_API</span>
                                ) as a Developer Advocate. Strong online presence <br> and creating content on
                                Twitter finally paid off. 🎉🎊🥳 <br>

                                Join RapidAPI today along with 3 million developers.

                            </p>
                        </div>
                        <div>
                            <div class="border rounded-xl border-slate-600 image-h  m-5"><img
                                    class="rounded-xl w-full" src="/img/pratham.jfif" alt="">
                            </div>
                            <div class="post-comment flex justify-between mt-2 items-center p-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                                <span onclick="myFunction8()">
                                <svg viewBox="0 0 24 24" aria-hidden="true" id="love8" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/sharath.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Sharath</span>
                                <span class="opacity-60">@sharathkrml</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">8h</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <span class="text-blue-600">#New_Profile-pic</span>
                        </div>
                        <div>
                            <div class="border rounded-xl border-slate-600 m-5 "><img class="rounded-xl w-full"
                                    src="/img/sharath.jpg" alt="">
                            </div>
                            <div class="post-comment flex justify-between mt-2 items-center p-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                                <span onclick="myFunction()">
                                <svg viewBox="0 0 24 24" aria-hidden="true" id="love" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/uttam.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Uttam Saran</span>
                                <span class="opacity-60">@imuttamsaran</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">8h</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">Twitter Clone with <span
                                    class="text-blue-600">#tailwindcss</span></p>
                        </div>
                        <div>
                            <div class="border rounded-xl border-slate-600 image-h  m-5"><img
                                    class="rounded-xl w-full" src="/img/uttam-d.jfif" alt="">
                            </div>
                            <div class="post-comment flex justify-between mt-2 items-center p-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                                <span onclick="myFunction2()">
                                <svg viewBox="0 0 24 24" aria-hidden="true" id="love2" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/deepti.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Dhrumi Shah</span>
                                <span class="opacity-60">@deetwts</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">12h</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">Thanks for reading this thread ❤
                                <br>
                                If you like it , make sure you:
                                <br>
                                🔷Like the tweet <br>
                                🔷Retweet the first tweet⚡
                                <br>
                                For more content , Follow:
                                <br>
                                <span class="text-blue-600"> @deetwts</span>
                            </p>
                        </div>
                        <div class="">
                        <div class="post-comment flex justify-between mt-2 items-center p-2">
                        <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                            <span onclick="myFunction3()">
                            <svg viewBox="0 0 24 24" aria-hidden="true" id="love3" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/tahera.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Tahera</span>
                                <span class="opacity-60">@alam_tahera</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">24h</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">Day 53 <br>
                                Day 54: Worked on the same project. <br>
                                It feels like I am wasting too much time in it. <br> <br>

                                So, giving myself a challenge of completing this <br> project by day after
                                tomorrow: backend,front end <br> and the styling. Let's do it!
                                <br>
                                <span class="text-blue-600">#100DaysOfCode</span>
                            </p>
                        </div>
                        <div>

                        <div class="post-comment flex justify-between mt-2 items-center p-2">
                        <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                            <span onclick="myFunction4()">
                            <svg viewBox="0 0 24 24" aria-hidden="true" id="love4" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/oscar-p.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Oscar.js</span>
                                <span class="opacity-60">@ronnohoscar</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">1d</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">There, fixed it with CSS for ya.</p>
                        </div>
                        <div>
                            <div class="border rounded-xl border-slate-600 image-h m-5 "><img
                                    class="rounded-xl w-full" src="/img/oscar.jfif" alt="">
                            </div>
                            <div class="post-comment flex justify-between mt-2 items-center p-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                                <span onclick="myFunction5()">
                                <svg viewBox="0 0 24 24" aria-hidden="true" id="love5" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/parth-p.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">Parth</span>
                                <span class="opacity-60">@theidealcoder</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">1d</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">Not my setup 😬 but it's super cool ✨
                                <br>
                                <span class="text-blue-600"> #codingsetup #javascript #coder #programmer</span>
                            </p>
                        </div>
                        <div>
                            <div class="border rounded-xl border-slate-600 image-h  m-5"><img
                                    class="rounded-xl w-full" src="/img/parth.jfif" alt="">
                            </div>
                            <div class="post-comment flex justify-between mt-2 items-center p-2">
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                                <span onclick="myFunction6()">
                                <svg viewBox="0 0 24 24" aria-hidden="true" id="love6" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">
            <div class="m-4">
                <div class=" flex">
                    <div class="w-12">
                        <img class="rounded-full" src="/img/selemondev.jpg" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex justify-between items-center">
                            <div class=" mx-2">
                                <span class="">selemonjrdev🚀</span>
                                <span class="opacity-60">@selemondev</span>
                                <span class="opacity-60">.</span>
                                <span class="opacity-60">2d</span>
                            </div>
                            <div class=""><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-2">
                            <p class="text-lg">That's all for today ☺. <br>

                                Let me introduce myself <br>

                                Hi! I'm Selemon 👋. <br>

                                 I Tweet About: <br>
                                ✅ Web Development <br>
                                ✅ My Learning Journey <br>
                                ✅ JavaScript Tips and Tricks <br>
                                ✅ CheatSheets <br>
                                ✅ Tech stories. <br>

                                Follow me for such great content 💎
                            </p>
                        </div>
                        <div class="">
                        <div class="post-comment flex justify-between mt-2 items-center p-2">
                        <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor""><g><path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
                            <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path></g></svg>
                            <span onclick="myFunction7()">
                            <svg viewBox="0 0 24 24" aria-hidden="true" id="love7" width="22" height="22" fill="currentColor"class="tape-love"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg></span>
                                <svg viewBox="0 0 24 24" aria-hidden="true"  width="22" height="22" fill="currentColor"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="border-none h-hr bg-slate-600">

        </div>
        <div class="text-center m-10 font-bold">
            <div id="preloader">
                <div id="loader"></div>
            </div>
        </div>
    </main>
    <section class="border-l border-solid  border-slate-600 w-7/12 hidden lg:block sticky right-0 top-0
    ">
        <div class=" sticky top-2">
            <div class="w-full m-2 bg-nav sticky top-2 z-30">
                <input
                    class="w-full rounded-full bg-search text-center max-h-4 py-5 outline-none border-0 sticky top-0"
                    type="search" placeholder="Search Twitter">
            </div>
            <div class="bg-search rounded-2xl p-3 my-2 ml-4">
                <h2 class="font-bold my-3 text-2xl">What's happening</h2>
                <div class="flex my-5">
                    <div class="">
                        <p class="opacity-50">Cricket . LIVE</p>
                        <h3 class="font-bold my-1">IPL 2022: SunRisers Hyderabad beat Gujarat Titans by eight
                            wickets</h3>
                        <p class="opacity-50">Trending with <span class="text-blue-500">#OrangeArmy, Kane</span>
                        </p>
                    </div>
                    <div class="w-32">
                        <img src="/img/srh.jfif" class="rounded-xl" alt="">
                    </div>
                </div>
                <div class="flex my-10">
                    <div class="">
                        <p class="opacity-50">Cricket . LIVE</p>
                        <h3 class="font-bold my-1">IPL 2022: SunRisers Hyderabad beat Gujarat Titans by eight
                            wickets</h3>
                        <p class="opacity-50">Trending with <span class="text-blue-500">#OrangeArmy, Kane</span>
                        </p>
                    </div>
                    <div class="w-32">
                        <img src="/img/srh.jfif" class="rounded-xl" alt="">
                    </div>
                </div>
                <div class="flex my-5">
                    <div class="">
                        <p class="opacity-50">Cricket . LIVE</p>
                        <h3 class="font-bold my-1">IPL 2022: SunRisers Hyderabad beat Gujarat Titans by eight
                            wickets</h3>
                        <p class="opacity-50">Trending with <span class="text-blue-500">#OrangeArmy, Kane</span>
                        </p>
                    </div>
                    <div class="w-32">
                        <img src="/img/srh.jfif" class="rounded-xl" alt="">
                    </div>
                </div>
                <a href="" class="text-blue-700">Show more</a>
            </div>
            <div class="bg-search rounded-2xl p-3 my-2 ml-4">
                <h2 class="font-bold my-3 text-2xl">Who to follow</h2>
                <div class="flex my-5 justify-between">
                    <div class="w-16">
                        <img src="/img/deepti.jpg" class="rounded-full" alt="">
                    </div>
                    <div class=" flex-grow ml-3">
                        <h2>Dhrumi Shah</h2>
                        <a href="" class="opacity-50">@deetwts</a>
                    </div>
                    <div class="" onclick="myFunc()">
                        <button id="nFollow"
                            class="bg-white text-black py-2 px-6  rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div class="flex my-5 justify-between">
                    <div class="w-16">
                        <img src="/img/tahera.jpg" class="rounded-full" alt="">
                    </div>
                    <div class=" flex-grow ml-3">
                        <h2>Tahera</h2>
                        <a href="" class="opacity-50">@alam_tahera</a>
                    </div>
                    <div class="" onclick="myFunc1()">
                        <button id="nFollow1"
                            class="bg-white text-black py-2 px-6  rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <div class="flex my-5 justify-between">
                    <div class="w-16">
                        <img src="/img/sharath.jpg" class="rounded-full" alt="">
                    </div>
                    <div class=" flex-grow ml-3">
                        <h2>Sharath</h2>
                        <a href="" class="opacity-50">@sharathkrml</a>
                    </div>
                    <div class="" onclick="myFunc2()">
                        <button id="nFollow2"
                            class="bg-white text-black py-2 px-6  rounded-full font-bold">Follow</button>
                    </div>

                </div>
                <a href="" class="text-blue-700">Show more</a>
            </div>
        </div>
    </section>
</div>
</div>
`;
