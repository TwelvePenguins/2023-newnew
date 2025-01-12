<template>
    <div class="bg-white dark:bg-slate-800">
        <div>
            <Nav />
            <div class="pt-16 sm:pt-32">
                <div class="relative isolate pt-14 lg:px-8">
                    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#cdb4db] to-[#ffc8dd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                    </div>
                    <div class="mx-auto max-w-4xl">
                        <div class="text-center">
                            <h1
                                class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white pb-10 sm:pb-24">
                                Our Events</h1>
                        </div>
                    </div>
                    <EventsLtextRpic :title="LtextRpicTitle1" :desc="LtextRpicDesc1" :img="LtextRpicImg1"
                        :date="LtextRpicDate1" />
                    <EventsRtextLpic :title="RtextLpicTitle1" :desc="RtextLpicDesc1" :img="RtextLpicImg1"
                        :date="RtextLpicDate1" />
                    <EventsLtextRpic :title="LtextRpicTitle2" :desc="LtextRpicDesc2" :img="LtextRpicImg2"
                        :date="LtextRpicDate2" />
                    <EventsRtextLpic :title="RtextLpicTitle2" :desc="RtextLpicDesc2" :img="RtextLpicImg2"
                        :date="RtextLpicDate2" />
                    <EventsLtextRpic :title="LtextRpicTitle3" :desc="LtextRpicDesc3" :img="LtextRpicImg3"
                        :date="LtextRpicDate3" />
                    <EventsCta />
                    <Footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EventsLtextRpic from '/components/events/LtextRpic.vue'
import EventsRtextLpic from '/components/events/RtextLpic.vue'

export default {
    components: {
        EventsLtextRpic, EventsRtextLpic,
    },
    data() {
        return {
            LtextRpicTitle1: 'March Conference',
            LtextRpicDesc1: "The March Conference aims to foster an interest in programming by featuring three beginner-level workshops on Python, Data Analytics, and HTML, CSS and Javascript. To put our participants' learning to the test, we have the \"Starvation\" challenge, our very own open-source hackathon that sums up the conference!",
            LtextRpicImg1: '/events/img1.png',
            LtextRpicDate1: '12-13 March 2023',
            RtextLpicTitle1: 'BBCS x FOSSASIA Summit',
            RtextLpicDesc1: "The FOSSASIA Summit 2023 is a hybrid event conducted both online and in-person, part of a series of FOSSASIA events held since 2009. Participate to connect with businesses, developers, and tech communities from around the world and learn about the latest developments in open source! BuildingBloCS is proud to be partnering FOSSASIA to present several workshops and talks, as well as our very own exhibition booth at the FOSSASIA Summit 2023.",
            RtextLpicImg1: '/events/img2.jpg',
            RtextLpicDate1: '12-13 March 2023',
            LtextRpicTitle2: 'June Conference',
            LtextRpicDesc2: "The June Conference is our flagship computing event held at NUS School of Computing. This year, the theme is Artificial Intelligence. We are holding over 17 workshops, 5 talks, and 3 hackathons over 3 tracks to cater to various skill levels!",
            LtextRpicImg2: '/events/img3.png',
            LtextRpicDate2: '29-30 May, 5 June 2023',
            RtextLpicTitle2: 'September Conference',
            RtextLpicDesc2: "The upcoming September Conference aims to train students with the competencies of Web Development, with workshops on frameworks like React and Vue, in addition to PythonAnywhere (Flask) and Continuous Integration & Continuous Deployment (CI/CD). This event will cap off with a 3D2N hackathon to test students for their web development skill and competency.",
            RtextLpicImg2: '/events/img4.jpg',
            RtextLpicDate2: '4-8 September 2023',
            LtextRpicTitle3: 'BBCS x BlahajCTF',
            LtextRpicDesc3: "The inaugural BlahajCTF is a Capture-the-Flag Competition open to Secondary School and Junior College students aiming to learn basic cybersecurity competencies. This year, BBCS is involved in the organisation of BlahajCTF in collaboration with Team Blahaj.",
            LtextRpicImg3: '/events/img5.png',
            LtextRpicDate3: '2 December 2023',
        };
    }
}
</script>

<script setup>
useSeoMeta({
    title: 'Events - BuildingBloCS 2023',
    description: 'Ignite your passion in computing',
    ogTitle: 'Events - BuildingBloCS 2023',
    ogDescription: 'Ignite your passion in computing',
    ogImage: '/index/hero/img3.jpg',
    ogUrl: 'https://new.buildingblocs.sg/events',
    twitterTitle: 'Events - BuildingBloCS 2023',
    twitterDescription: 'Ignite your passion in computing',
    twitterImage: '/index/hero/img3.jpg',
    twitterCard: 'summary_large_image'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})
</script>