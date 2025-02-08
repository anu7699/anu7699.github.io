/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Potent Real-Time Recommendations using Multi-Model Contextual Reinforcement Learning",
    authors:
      "Anu Agarwal, Anubha Kabra, Anil Singh Parihar",
    conferences:
      "IEEE Transactions on Computational Social Systems 9 (2), Pages 581-593",
    researchYr: 2021,
    citebox: "popup1",
    image: "assets/images/research-page/mmcr.png",
    citation: {
      vancouver:
        "A. Kabra, A. Agarwal and A. S. Parihar, 'Potent Real-Time Recommendations Using Multimodel Contextual Reinforcement Learning,' in IEEE Transactions on Computational Social Systems, vol. 9, no. 2, pp. 581-593, April 2022, doi: 10.1109/TCSS.2021.3100291.",
    },
    abstract:
      "Widespread digitalization has led to almost all utilities and services thrive on an online medium. A real-time, personalized, and trend grasping recommendation system is necessary to enhance user experience and boost business on E-commerce platforms. We propose the Multimodel Contextual Reinforcement Learning (MMCR) constituting three novel features for real-time and customized recommendations. The first feature is user-item interactive state embedding which uses not only item information but also assigns weightage to this information according to its usage history. It gives higher importance to the newly clicked items by the users than the older ones. Second, we devised Contextual Cluster Exploration (CCE) strategy. This strategy enhances the item-choice recommendations by consistently reducing the randomness during exploration. The third novelty is an item-based multi-agent framework that can tackle the case of sparsely chosen items. Generally, such items are disregarded in a single agent model as the more popular items take supremacy. Our technique ensures that the user-item history per item is learned separately; thus, no item is neglected. MMCR has shown an average of 5% increase in CTR rate. Moreover, CCE exploration gives a considerably higher score than state-of-the-art exploration strategies. Thorough experimentation demonstrates that our proposed strategy has shown significantly improved results over various state-of-the-art strategies.",
    absbox: "absPopup1",
  },

  {
    title: "Personalized and Dynamic top-k Recommendation System using Context Aware Deep Reinforcement Learning",
    authors:
      "Anu Agarwal, Anubha Kabra",
    conferences:
      "2021 IEEE 45th Annual Computers, Software, and Applications Conference (COMPSAC), Madrid, Spain, 2021, pp. 238-247",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/CFB.jpeg",
    citation: {
      vancouver:
        "Kabra A, Agarwal A. Personalized and dynamic top-k recommendation system using context aware deep reinforcement learning. In2021 IEEE 45th Annual Computers, Software, and Applications Conference (COMPSAC) 2021 Jul 12 (pp. 238-247). IEEE.",
    },
    abstract:
      "With the ever-increasing number of choices in just about every domain, ranging from e-commerce platforms to music and video streaming apps, it requires a highly personalized and best-in-class experience to make the users stay. Relevant, dynamic and smart item recommendations play a significant role in providing quality user experience. The majority of existing work either relies on explicit user feedback or gives static recommendations that poorly adapt to the changing user preferences. This paper proposes novel model architectures, namely, Sequential Feature Bandits(SFB) and Cross Feature Bandits(CFB) for providing online top-k context-aware recommendations. It leverages the item features, and uses implicit user feedback with a reinforcement learning backed dynamic algorithm. We use deep-q learning to maximize the cumulative estimated reward(CMR) and click-through rate(CTR) along with an experience replay strategy to prevent the proposed models from getting destabilized. Detailed experiments were conducted on a commercially available news article data set with implicit user-feedback and user-item context features. A thorough experimentation shows an average increase of 23.4% in CTR values and proves the effectiveness of the proposed SFB and CFB architectures for real-time recommendation.",
    absbox: "absPopup2",
  },

  {
    title:
      "Cluster-based deep contextual reinforcement learning for top-k recommendations",
    authors: "Anubha Kabra, Anu Agarwal, Anil Singh Parihar",
    conferences:
      "Proceedings of the International Conference on Computing and Communication Systems: I3CS 2020, NEHU, Shillong, India",
    researchYr: 2020,
    citebox: "popup3",
    image: "assets/images/research-page/cluster.png",
    citation: {
      vancouver:
        "Kabra A, Agarwal A, Parihar AS. Cluster-based deep contextual reinforcement learning for top-k recommendations. InProceedings of the International Conference on Computing and Communication Systems: I3CS 2020, NEHU, Shillong, India 2021 (pp. 125-135). Springer Singapore.",
    },
    abstract:
      "Rapid advancements in the E-commerce sector over the last few decades have led to an imminent need for personalized, efficient and dynamic recommendation systems. To sufficiently cater to this need, we propose a novel method for generating top-k recommendations by creating an ensemble of clustering with reinforcement learning. We have incorporated DB scan clustering to tackle vast item space, hence increasing the efficiency multi-fold. Moreover, by using deep contextual reinforcement learning, our proposed work leverages the user features to its full potential. With partial updates and batch updates, the model learns user patterns continuously. The dueling bandit-based exploration provides robust exploration as compared to the state-of-the-art strategies due to its adaptive nature. Detailed experiments conducted on a public dataset verify our claims about the efficiency of our technique as compared to existing techniques.",
    absbox: "absPopup3",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
