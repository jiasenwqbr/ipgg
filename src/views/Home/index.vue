<template>
  <div class="home">
    <section class="section fir">
      <img src="@/assets/images/home_b_1.svg" alt="">
    </section>
    <section class="section sec">
      <div class="sec_con wow
            animate__animated animate__fadeInUp
            data-wow-duration='0.7s' data-wow-delay='0.7s'">
           <h2>THE COLLECTION</h2>
           <span>InterPlanetary Pirate Genesis(IPPG) is a collection of 9999 unique NFTs created with high-quality collectible art and innovative utility. It is also the genesis NFT of the Loomee platform, which manifests the benefits and privileges of Loomee co-founders worldwide.</span>
           <span>IPPG are not just avatars of the global partner of the Loomee platform and the ambassador of the Filecoin ecosystem, but also the builder of PGverse, the manager of a brand, a super rapper, a virtual idol, a dream chaser, and the protagonist of an adventure who knows how to make something out of nothing. Only the boundary of imagination can limit IPPG's pace. IPPG's existence is not only in the metaverse but will eventually penetrate reality. Anyway, light up, own your Pirate, and start the adventure.</span>
     </div>
      <div class="loom-swiper-3">
        
        <vue3-seamless-scroll :list="list" class="scroll" direction="right" :step="0.2">
          <ul class="ul-item">
            <li class="li-item" v-for="(item, index) in list" :key="index">
              <img :src="item" alt="" />
            </li>
          </ul>
        </vue3-seamless-scroll>

        <vue3-seamless-scroll :list="list" class="scroll" direction="left" :step="0.2">
          <ul class="ul-item">
            <li class="li-item" v-for="(item, index) in list" :key="index">
              <img :src="item" alt="" />
            </li>
          </ul>
        </vue3-seamless-scroll>
       
      </div>
    </section>
    <section class="section thir_pc">
        <h2 class="wow
            animate__animated animate__fadeInUp
            data-wow-duration='0.7s' data-wow-delay='0.7s'">ROADMAP</h2>
        <div class="thir_con">
          <div class="thir_l">
              <div class="le_i">
                  <div class="zhou_w wow
                        animate__animated animate__fadeInUp
                        data-wow-duration='0.7s' data-wow-delay='0.7s'">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                  <div class="i_con">
                      <div class="i_con_up
                      wow
                      animate__animated animate__fadeInLeft
                      data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                        <span class="title">PHASE 1</span>
                        <ul>
                          <li> Create a strong community and do a lot of giveaways, raffles, and contests; the winners' prizes include WL spots and NFTs</li>
                          <li>Launched Loomee marketplace for trading</li>
                          <li> IPPG Collection minted and sold out</li>
                          <li>Holders Receive Loomee's Global Permanent Partner Status Certification</li>
                          <li>Receive WL airdrops from Loomee's many partner programs</li>
                          <li>Establish the NFT incubation foundation and support IPPG holders to create their commercialized products</li>
                        </ul>
                      </div>
                      <span class="
                         wow
                         animate__animated animate__fadeInLeft
                         data-wow-duration='0.7s' data-wow-delay='0.7s'
                         ">
                        <img  src="@/assets/images/road_2.png" alt="" class="kt">
                      </span>
                  </div>
              </div>

              <div class="le_i" style="margin-top:60px">
                  <div class="zhou_w
                       wow
                       animate__animated animate__fadeInUp
                       data-wow-duration='0.7s' data-wow-delay='0.7s'
                  ">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                  <div class="i_con">
                      <div class="i_con_up
                        wow
                        animate__animated animate__fadeInLeft
                        data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                        <span class="title">PHASE 3</span>
                        <ul>
                          <li>Bailouts in multiple metaverses.IPPG is committed to the best buildouts in multiple metaverses, including sandbox&kibaa. Holders will receive voxel versions of their IPPG NFTs for the Sandbox metaverse and AR/VR-ready 3d models for the kibaa metaverse</li>
                          <li>IPPG community gives back. Holders may apply for sponsorship for various charitable initiatives throughout the year</li>
                          <li>We will elevate our brand value by partnering with celebrities, professional athletes, famous musicians, and world-renowned brands.IPPG will provide all holders lasting and exceptional value and an elite and exclusive community experience that celebrates and incorporates the revolutionary technology behind NFTs with pop culture, fashion, music, and sports</li>
                        </ul>
                      </div>
                      <span class=" wow
                        animate__animated animate__fadeInLeft
                        data-wow-duration='0.7s' data-wow-delay='0.7s'">
                        <img src="@/assets/images/road_3.png" alt="" class="kt">
                      </span>
                  </div>
              </div>
           </div>

           <div class="thir_r">
              <div class="ri_i
                    wow
                    animate__animated animate__fadeInRight
                    data-wow-duration='0.7s' data-wow-delay='0.7s'
                    ">
                  <div class="i_con">
                      <img src="@/assets/images/road_1.png" alt="" class="kt"/>
                  </div>
              </div>
              <div class="ri_i" style="margin-top:10px">
                  <div class="zhou_w
                      wow
                      animate__animated animate__fadeInUp
                      data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                  <div class="i_con ">
                      <div class="i_con_up
                        wow
                        animate__animated animate__fadeInRight
                        data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                        <span class="title">PHASE 2</span>
                        <ul>
                          <li>Deep into the filecoin ecosystem by solving real problems and becoming an essential part</li>
                          <li>Metaverse event & digital art gallery</li>
                          <li>Developing the PGBank for IPPG</li>
                          <li>Physical collectible reward</li>
                          <li>Launch PGDAO for open and transparent community governance</li>
                          <li>IPPG online shopping mall, limited edition merchandising & clothing</li>
                          <li>FVM cross-chain program</li>
                        </ul>
                      </div>
                      <span class="
                            wow
                            animate__animated animate__fadeInRight
                            data-wow-duration='0.7s' data-wow-delay='0.7s'
                            ">
                        <img src="@/assets/images/road_4.png" alt="" class="kt"/>
                      </span>
                  </div>
              </div>

               <div class="ri_i" style="margin-top:60px">
                  <div class="zhou_w
                      wow
                      animate__animated animate__fadeInUp
                      data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                  <div class="i_con">
                      <div class="i_con_up
                        wow
                        animate__animated animate__fadeInRight
                        data-wow-duration='0.7s' data-wow-delay='0.7s'
                        ">
                        <span class="title">PHASE 4</span>
                        <ul>
                          <li>Additional growth in brand reach. IPPG spin-offs penetrate many industries such as games, comics, animation, movies, sports, music, and toys .......</li>
                          <li>In the future, IPPG will launch an extended series based on FVM technology, and all IPPG holders will have access to the second series of NFT.</li>
                          <li>PGverse becomes a hub for sports fanatics, gamers, sneaker and fashion apparel collectors, cryptocurrency investors and entrepreneurs, artists, musicians, storytellers, creators, builders, thriving Filecoin ecosystem.</li>
                        </ul>
                      </div>
                  </div>
              </div>
           </div>
        </div>
    </section>

    <section class="section thir_phone">
        <h2 class="wow
            animate__animated animate__fadeInUp
            data-wow-duration='0.7s' data-wow-delay='0.7s'">ROADMAP</h2>
        <div class="thir_con">
          <div class="thir_l">
              <div class="le_i">
                  <div class="zhou_w wow
                        animate__animated animate__fadeInUp
                        data-wow-duration='0.7s' data-wow-delay='0.7s'">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                  <div class="i_con">
                      <div class="i_con_up
                      wow
                      animate__animated animate__fadeInLeft
                      data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                        <span class="title">PHASE 1</span>
                        <ul>
                          <li> Create a strong community and do a lot of giveaways, raffles, and contests; the winners' prizes include WL spots and NFTs</li>
                          <li>Launched Loomee marketplace for trading</li>
                          <li> IPPG Collection minted and sold out</li>
                          <li>Holders Receive Loomee's Global Permanent Partner Status Certification</li>
                          <li>Receive WL airdrops from Loomee's many partner programs</li>
                          <li>Establish the NFT incubation foundation and support IPPG holders to create their commercialized products</li>
                        </ul>
                      </div>
                      <span class="
                         wow
                         animate__animated animate__fadeInLeft
                         data-wow-duration='0.7s' data-wow-delay='0.7s'
                         ">
                        <img  src="@/assets/images/road_2.png" alt="" class="kt">
                      </span>
                  </div>
                  
              </div>

              <div class="le_i">
                  <div class="zhou_w
                       wow
                       animate__animated animate__fadeInUp
                       data-wow-duration='0.7s' data-wow-delay='0.7s'
                  ">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                 

                  <div class="i_con ">
                      <div class="i_con_up
                        wow
                        animate__animated animate__fadeInRight
                        data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                        <span class="title">PHASE 2</span>
                        <ul>
                          <li>Deep into the filecoin ecosystem by solving real problems and becoming an essential part</li>
                          <li>Metaverse event & digital art gallery</li>
                          <li>Developing the PGBank for IPPG</li>
                          <li>Physical collectible reward</li>
                          <li>Launch PGDAO for open and transparent community governance</li>
                          <li>IPPG online shopping mall, limited edition merchandising & clothing</li>
                          <li>FVM cross-chain program</li>
                        </ul>
                      </div>
                      <span class="
                            wow
                            animate__animated animate__fadeInRight
                            data-wow-duration='0.7s' data-wow-delay='0.7s'
                            ">
                        <img src="@/assets/images/road_4.png" alt="" class="kt"/>
                      </span>
                  </div>
              </div>
           </div>

           <div class="thir_r">
             
              <div class="ri_i">
                  <div class="zhou_w
                      wow
                      animate__animated animate__fadeInUp
                      data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                   <div class="i_con">
                      <div class="i_con_up
                        wow
                        animate__animated animate__fadeInLeft
                        data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                        <span class="title">PHASE 3</span>
                        <ul>
                          <li>Bailouts in multiple metaverses.IPPG is committed to the best buildouts in multiple metaverses, including sandbox&kibaa. Holders will receive voxel versions of their IPPG NFTs for the Sandbox metaverse and AR/VR-ready 3d models for the kibaa metaverse</li>
                          <li>IPPG community gives back. Holders may apply for sponsorship for various charitable initiatives throughout the year</li>
                          <li>We will elevate our brand value by partnering with celebrities, professional athletes, famous musicians, and world-renowned brands.IPPG will provide all holders lasting and exceptional value and an elite and exclusive community experience that celebrates and incorporates the revolutionary technology behind NFTs with pop culture, fashion, music, and sports</li>
                        </ul>
                      </div>
                      <span class=" wow
                        animate__animated animate__fadeInLeft
                        data-wow-duration='0.7s' data-wow-delay='0.7s'">
                        <img src="@/assets/images/road_3.png" alt="" class="kt">
                      </span>
                  </div>


              </div>

               <div class="ri_i">
                  <div class="zhou_w
                      wow
                      animate__animated animate__fadeInUp
                      data-wow-duration='0.7s' data-wow-delay='0.7s'
                      ">
                    <span>WAGMI</span>
                    <span class="zhou_l"></span>
                    <span class="round"></span>
                  </div>
                  <div class="i_con">
                      <div class="i_con_up
                        wow
                        animate__animated animate__fadeInRight
                        data-wow-duration='0.7s' data-wow-delay='0.7s'
                        ">
                        <span class="title">PHASE 4</span>
                        <ul>
                          <li>Additional growth in brand reach. IPPG spin-offs penetrate many industries such as games, comics, animation, movies, sports, music, and toys .......</li>
                          <li>In the future, IPPG will launch an extended series based on FVM technology, and all IPPG holders will have access to the second series of NFT.</li>
                          <li>PGverse becomes a hub for sports fanatics, gamers, sneaker and fashion apparel collectors, cryptocurrency investors and entrepreneurs, artists, musicians, storytellers, creators, builders, thriving Filecoin ecosystem.</li>
                        </ul>
                      </div>
                  </div>
              </div>
           </div>
        </div>
    </section>

    <section class="section four">
       <div class="four_con wow
            animate__animated animate__fadeInUp
            data-wow-duration='0.7s' data-wow-delay='0.7s'">
           <h2>TEAM & PARTNERS</h2>
           <span>The core team is a collective of builders, thinkers, operators, technologists, and creators. In the initial stage, the goal is to make IPPG the #1 NFT community on Filecoin.But our ultimate vision is to create a brand that integrates the virtual and physical, bridges culture to Web3, real life to the digital multiverse, and makes the IPPG a household name.</span>
      </div>
    </section>

    <div class="swiper">
      <div class="swiper_con_pc">
        <a-carousel arrows  :dots='dots' autoplay> 
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
       <div class="sw_w">
          <div class="swiper_i">
            <img src="@/assets/images/my_s1.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>Fido</h2>
              <span>
               Co-Founder, Filecoin Storage Provider Builder of the filecoin ecosystem
              </span>
            </div>
          </div>
          <div class="swiper_i">
            <img src="@/assets/images/my_s2.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>Degen</h2>
              <span>
               Co-Founder, Filecoin Storage Provider Work for WEB3.0｜Filecoin｜Loomee
              </span>
            </div>
          </div>
          <div class="swiper_i">
            <img src="@/assets/images/my_s3.jpg" alt="" class="swiper_img"/>
            <div class="sw_i_con">
              <h2>S776 Labs</h2>
              <span>
                web3-grown brand incubator, consultant advising on marketing,and public relations
              </span>
            </div>
          </div>
      </div>


       <div class="sw_w">
          <div class="swiper_i">
            <img src="@/assets/images/my_s4.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>Balancewell</h2>
              <span>
              Technical Team, FVM Foundry, Achievements in distributed storage, web3 programming
              </span>
            </div>
          </div>
          <div class="swiper_i">
            <img src="@/assets/images/my_s5.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>MoonHi</h2>
              <span>
              PartnerShip, Fund dedicated to Filecoin ecosystem
              </span>
            </div>
          </div>
      </div>
      </a-carousel>
      </div>
      <div class="swiper_con_phone">
        <a-carousel arrows  :dots='dots' autoplay> 
        <template #prevArrow>
          <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
            <left-circle-outlined />
          </div>
        </template>
        <template #nextArrow>
          <div class="custom-slick-arrow" style="right: 10px">
            <right-circle-outlined />
          </div>
        </template>
        <div class="sw_w">
              <div class="swiper_i">
            <img src="@/assets/images/my_s1.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>Fido</h2>
              <span>
               Co-Founder, Filecoin Storage Provider Builder of the filecoin ecosystem
              </span>
            </div>
          </div>
        </div>
        <div class="sw_w">
           <div class="swiper_i">
            <img src="@/assets/images/my_s2.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>Degen</h2>
              <span>
               Co-Founder, Filecoin Storage Provider Work for WEB3.0｜Filecoin｜Loomee
              </span>
            </div>
          </div>
        </div>
        <div class="sw_w">
          <div class="swiper_i">
            <img src="@/assets/images/my_s3.jpg" alt="" class="swiper_img"/>
            <div class="sw_i_con">
              <h2>S776 Labs</h2>
              <span>
                web3-grown brand incubator, consultant advising on marketing,and public relations
              </span>
            </div>
          </div>
      </div>

      <div class="sw_w">
        <div class="swiper_i">
            <img src="@/assets/images/my_s4.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>Balancewell</h2>
              <span>
              Technical Team, FVM Foundry, Achievements in distributed storage, web3 programming
              </span>
            </div>
          </div>
      </div>
       <div class="sw_w">
          <div class="swiper_i">
            <img src="@/assets/images/my_s5.jpg" alt="" class="swiper_img">
            <div class="sw_i_con">
              <h2>MoonHi</h2>
              <span>
              PartnerShip, Fund dedicated to Filecoin ecosystem
              </span>
            </div>
          </div>
      </div>
      </a-carousel>
      </div>
    </div>

    
  

    
   
    <section class="section five">
      <h2 class="wow
            animate__animated animate__fadeInUp
            data-wow-duration='0.7s' data-wow-delay='0.7s'">FAQ</h2>
      <div class="us">
        <div class="us_d">
          <a-collapse  :bordered="false" :expand-icon-position="expandIconPosition" accordion  class="collapse">
            <a-collapse-panel  :header="item.title"  v-for="(item,index) in extendList" :key="index" class="panel">
              <span  class="extend-i-other">{{ item.content }}</span>
            </a-collapse-panel>
             <template #expandIcon="{ isActive }">
           
            </template>
          </a-collapse>
        </div>
      </div>
    </section>
   
    <Footer />
  </div>
</template>
<script>
import {
  ref,
  getCurrentInstance,
  onMounted,
  defineComponent,
} from "vue";
import {  useRouter } from 'vue-router'
import { CaretRightOutlined,LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import WOW from "wow.js";
import Atropos from "atropos/vue";
import Footer from "@/components/Footer/index.vue";
import swiper_1 from "@/assets/swiper/1.jpg";
import swiper_2 from "@/assets/swiper/2.jpg";
import swiper_3 from "@/assets/swiper/3.jpg";
import swiper_4 from "@/assets/swiper/4.jpg";
import swiper_5 from "@/assets/swiper/5.jpg";
import swiper_6 from "@/assets/swiper/6.jpg";
import swiper_7 from "@/assets/swiper/7.jpg";
import swiper_8 from "@/assets/swiper/8.jpg";
import swiper_9 from "@/assets/swiper/9.jpg";
import swiper_10 from "@/assets/swiper/10.jpg";
import swiper_11 from "@/assets/swiper/11.jpg";
import swiper_12 from "@/assets/swiper/12.jpg";
import swiper_13 from "@/assets/swiper/13.jpg";
import swiper_14 from "@/assets/swiper/14.jpg";

import swiper_15 from "@/assets/swiper/15.jpg";
import swiper_16 from "@/assets/swiper/16.jpg";
import swiper_17 from "@/assets/swiper/17.jpg";
import swiper_18 from "@/assets/swiper/18.jpg";

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
   
    const isF = ref(false);
    let imglist = [
      swiper_1,
      swiper_4,
      swiper_2,
      swiper_5,
      swiper_6,
      swiper_7,
      swiper_3,
      swiper_8,
      swiper_1,
      swiper_3,
      swiper_2,
      swiper_4,
      swiper_6,
      swiper_7,
      swiper_5,
      swiper_8,
      swiper_9,
      swiper_10,
      swiper_11,
      swiper_12,
      swiper_13,
      swiper_14,
      swiper_15,
      swiper_16,
      swiper_17,
      swiper_18
    ];
    const list = ref(imglist);
    // const swipers = ref([loopgs,loopgs]);
    const collapseStyle = ''
    const panel= ''
    const dots =ref(false)
  
    const expandIconPosition = ref('right');
    const extendList = ref([
      {
        isExtend: false,
        title: "Why choose Loomee Genesis NFT: IPPG?",
        content:
          "We consider all IPPG holders as permanent global partners of the Loomee platform, and we plan to share our revenues in the future. Some of the most attractive benefits include high pledge rewards for Token MEE, Token MEE airdrop, the share of future platform revenue (fees and others), transaction fee waivers, and whitelist distribution of countless quality projects.",
      },
      {
        isExtend: false,
        title: "Are we going to the moon?",
        content:
          "Certainly.Together with Filecoin.PPIG&Loomee AGMI......",
      },
      {
        isExtend: false,
        title: "What are secondary royalties and how will they be used?",
        content:
          "We will receive 2% of all secondary sales. We will allocate 10% of this amount to the holder and use the remaining 90% to hire more full-time team members, fund operations, and deliver even more value to our community!",
      },
      {
        isExtend: false,
        title: "Are we doing a collab with Disney?",
        content:
          "100%. Just waiting for their call...",
      },
      {
        isExtend: false,
        title: "What is Filecoin?",
        content:
          "Filecoin is a decentralized storage network designed to store humanity's most important information.",
      },
      {
        isExtend: false,
        title: "What's our relationship with Filecoin?",
        content:
          "We are storage providers of the filecoin ecosystem. Now, we plan to continue building deeper.",
      },
       {
        isExtend: false,
        title: "What is NFT?",
        content:
          "NFT is a nice fortune try.",
      },
       {
        isExtend: false,
        title: "When is the mint?",
        content:
          "TBA. Please follow us on Twitter and Discord for the latest information.",
      },
       {
        isExtend: false,
        title: "Philosophy of IPPG?",
        content:
          "Always in balance, pursuing pleasure, wealth, and freedom by taking advantage of the spring, no matter how bad the external environment is.",
      },
       {
        isExtend: false,
        title: "When to launch token $MEE?",
        content:
          "TBA. But we can be sure that the holder can get a great reward by pledging. After confirming the details, we will update this part on the white paper and officially issue the $MEE coin at the right time.",
      },



      {
        isExtend: false,
        title: "What does utility-enabled mean?",
        content:
          "Real life value; live events, exclusive merchandise, brand experiences and voting rights.",
      },
       {
        isExtend: false,
        title: "Want to join our community?",
        content:
          "If you’re spreading the word about what we stand for, then you’re already a part of IPPG! Follow us on Twitter or Instagram, and join our Discord to connect with the community.",
      },
       {
        isExtend: false,
        title: "How do I participate in each round of Mint?",
        content:
          "All you have to do is invite your friends to join us! When you complete the invite task, you'll be eligible to participate in each round of NFT casting! Follow us on our official Twitter feed and join our Discord server to learn more!",
      },
       {
        isExtend: false,
        title: "What additional rewards can I get if my invitation exceeds the requirements?",
        content:
          "We will record all the members you invite. The number of people you invite will be directly related to the percentage of your share of revenue in the platform in the future.",
      },
       {
        isExtend: false,
        title: "What intellectual property rights do IPPG holders receive?",
        content:
          "Full commercial art rights. We are also registering the trademark to protect ourselves from trademark trolls. Full details are coming soon.",
      },
    ]);
    const changeExtendList = (index) => {
      proxy.extendList[index].isExtend = !proxy.extendList[index].isExtend;
    };
    const initWoW = () => {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
        callback: function (box) {},
        scrollContainer: null,
        resetAnimation: true,
      });
      wow.init();
    };

    onMounted(() => {
      initWoW();
    });
    return {
      isF,
      extendList,
      changeExtendList,
      list,
      expandIconPosition,
      dots
    };
  },
  components: {
    Atropos,
    Footer,
    CaretRightOutlined,
    Vue3SeamlessScroll,
    LeftCircleOutlined,
    RightCircleOutlined,
  },
});
</script>

<style scoped lang='scss'>
@import "./index.scss";
</style>
<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 500px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

:deep(.ant-collapse-borderless){
  background: #121212;
}
:deep(.ant-collapse-item div){
  color: #fff !important;
}
</style>