"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3374],{47130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),r=["components"],s={description:"Protocol specification glossary.",image:"/img/logo/goshimmer_light.png",keywords:["transactions","node","tangle","weak parents","past cone","approval switch","tip selection","mana distribution","value transfer application"]},l="Glossary",c={unversionedId:"protocol_specification/glossary",id:"protocol_specification/glossary",isDocsHomePage:!1,title:"Glossary",description:"Protocol specification glossary.",source:"@site/external/goshimmer/documentation/docs/protocol_specification/glossary.md",sourceDirName:"protocol_specification",slug:"/protocol_specification/glossary",permalink:"/goshimmer/protocol_specification/glossary",tags:[],version:"current",frontMatter:{description:"Protocol specification glossary.",image:"/img/logo/goshimmer_light.png",keywords:["transactions","node","tangle","weak parents","past cone","approval switch","tip selection","mana distribution","value transfer application"]},sidebar:"docs",previous:{title:"Markers",permalink:"/goshimmer/protocol_specification/components/markers"},next:{title:"Client Lib: Interaction With Layers",permalink:"/goshimmer/apis/client_lib"}},p=[{value:"Application Layer",id:"application-layer",children:[{value:"Core Applications",id:"core-applications",children:[]},{value:"Faucet",id:"faucet",children:[]},{value:"Value Transfer Application",id:"value-transfer-application",children:[]}]},{value:"Communication Layer",id:"communication-layer",children:[{value:"Mana",id:"mana",children:[]},{value:"Message",id:"message",children:[]},{value:"Message Overhead",id:"message-overhead",children:[]},{value:"Parent",id:"parent",children:[]},{value:"Payload",id:"payload",children:[]},{value:"Transaction",id:"transaction",children:[]},{value:"Tip Selection",id:"tip-selection",children:[]}]},{value:"Consensus",id:"consensus",children:[{value:"Blockchain Bottleneck",id:"blockchain-bottleneck",children:[]},{value:"Mining Races",id:"mining-races",children:[]},{value:"Nakamoto Consensus",id:"nakamoto-consensus",children:[]},{value:"Proof of Work",id:"proof-of-work",children:[]}]},{value:"Coordinator",id:"coordinator",children:[{value:"Milestones",id:"milestones",children:[]}]},{value:"Markers",id:"markers",children:[]},{value:"Network Layer",id:"network-layer",children:[{value:"Eclipse Attack",id:"eclipse-attack",children:[]},{value:"Neighbors",id:"neighbors",children:[]},{value:"Node",id:"node",children:[]},{value:"Peering",id:"peering",children:[]},{value:"Small World Network",id:"small-world-network",children:[]},{value:"Splitting Attack",id:"splitting-attack",children:[]},{value:"Sybil Attack",id:"sybil-attack",children:[]}]},{value:"Tangle",id:"tangle",children:[{value:"Subtangle",id:"subtangle",children:[]}]}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"application-layer"},"Application Layer"),(0,o.kt)("p",null,"The IOTA Protocol allows for a host of applications to run on the message tangle. Anybody can design an application, and users can decide which applications to run on their nodes. These applications will all use the communication layer to broadcast and store data."),(0,o.kt)("h3",{id:"core-applications"},"Core Applications"),(0,o.kt)("p",null,"Applications that are necessary for the protocol to operate. These include for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The value transfer application"),(0,o.kt)("li",{parentName:"ul"},"The distributed random number generator (DRNG for short)"),(0,o.kt)("li",{parentName:"ul"},"The Fast Probabilistic Consensus (FPC) protocol")),(0,o.kt)("h3",{id:"faucet"},"Faucet"),(0,o.kt)("p",null,"A test application issuing funds on request."),(0,o.kt)("h3",{id:"value-transfer-application"},"Value Transfer Application"),(0,o.kt)("p",null,"The application which maintains the ledger state."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"communication-layer"},"Communication Layer"),(0,o.kt)("p",null,"This layer stores and communicates information. This layer contains the \u201cdistributed ledger\u201d or the tangle. The rate control and timestamps are in this layer too."),(0,o.kt)("h3",{id:"mana"},"Mana"),(0,o.kt)("p",null,"The reputation of a node is based on a virtual token called mana. This reputation, working as a Sybil protection mechanism, is important for issuing more transactions (see Module 3) and having a higher influence during the voting process (see Module 5)."),(0,o.kt)("h4",{id:"epoch"},"Epoch"),(0,o.kt)("p",null,"A time interval that is used for a certain type of consensus mana. At the end of each epoch a snapshot of the state of mana distribution in the network is taken. Since this tool employs the timestamp of messages every node can reach consensus on an epoch's mana distribution eventually."),(0,o.kt)("h3",{id:"message"},"Message"),(0,o.kt)("p",null,"The object that is gossiped between neighbors. All gossiped information is included in a message. The most basic unit of information of the IOTA Protocol. Each message has a type and size and contains data."),(0,o.kt)("h3",{id:"message-overhead"},"Message Overhead"),(0,o.kt)("p",null,"The additional information (metadata) that needs to be sent along with the actual information (data). This can contain signatures, voting, heartbeat signals, and anything that is transmitted over the network but is not the transaction itself."),(0,o.kt)("h3",{id:"parent"},"Parent"),(0,o.kt)("p",null,"A message approved by another message is called a parent to the latter. A parent can be selected as strong or weak parent. If the past cone of the parent is liked the parent is set as strong parent. If the message is liked but its past cone is disliked it is set as a weak parent. This mechanism is called approval switch."),(0,o.kt)("h3",{id:"payload"},"Payload"),(0,o.kt)("p",null,"A field in a message which determines the type. Examples are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Value payload (type TransactionType)"),(0,o.kt)("li",{parentName:"ul"},"FPC Opinion payload (type StatementType)"),(0,o.kt)("li",{parentName:"ul"},"dRNG payload"),(0,o.kt)("li",{parentName:"ul"},"Salt declaration payload"),(0,o.kt)("li",{parentName:"ul"},"Generic data payload")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"transaction"},"Transaction"),(0,o.kt)("p",null,"A message with payload of type TransactionType. It contains the information of a transfer of funds."),(0,o.kt)("h4",{id:"finality"},"Finality"),(0,o.kt)("p",null,"The property that once a transaction is completed there is no way to revert or alter it. This is the moment when the parties involved in a transfer can consider the deal done. Finality can be deterministic or probabilistic."),(0,o.kt)("h4",{id:"history"},"History"),(0,o.kt)("p",null,"The list of transactions directly or indirectly approved by a given transaction."),(0,o.kt)("h4",{id:"orphan"},"Orphan"),(0,o.kt)("p",null,"A transaction (or block) that is not referenced by any succeeding transaction (or block). An orphan is not considered confirmed and will not be part of the consensus."),(0,o.kt)("h4",{id:"reattachment"},"Reattachment"),(0,o.kt)("p",null,"Resending a transaction by redoing tip selection and referencing newer tips by redoing PoW."),(0,o.kt)("h4",{id:"solidification-time"},"Solidification Time"),(0,o.kt)("p",null,"The solidification time is the point at which the entire history of a transaction has been received by a node."),(0,o.kt)("h4",{id:"utxo"},"UTXO"),(0,o.kt)("p",null,"Unspent transaction output."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"tip-selection"},"Tip Selection"),(0,o.kt)("p",null,"The process of selecting previous messages to be referenced by a new message. These references are where a message attaches to the existing data structure. IOTA only enforces that a message approves (at least) two other messages, but the tip selection strategy is left up to the user (with a good default provided by IOTA)."),(0,o.kt)("h4",{id:"approval-switch"},"Approval Switch"),(0,o.kt)("p",null,"When selecting a message as a parent, we can select from the strong or weak tip pool. This mechanism is called approval switch."),(0,o.kt)("h4",{id:"approval-weight"},"Approval Weight"),(0,o.kt)("p",null,"A message gains mana weight, by messages approving it directly or indirectly. However, only strong parents can propagate the mana weight to the past, while weak parents obtain the weight from its weak children but don't propagate it."),(0,o.kt)("h4",{id:"local-modifiers"},"Local Modifiers"),(0,o.kt)("p",null,"Custom conditions that nodes can take into account during tip selection. In IOTA, nodes do not necessarily have the same view of the Tangle; various kinds of information only locally available to them can be used to strengthen security."),(0,o.kt)("h4",{id:"tip"},"Tip"),(0,o.kt)("p",null,"A message that has not yet been approved."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"consensus"},"Consensus"),(0,o.kt)("p",null,"Agreement on a specific datum or value in distributed multi-agent systems, in the presence of faulty processes."),(0,o.kt)("h3",{id:"blockchain-bottleneck"},"Blockchain Bottleneck"),(0,o.kt)("p",null,"As more transactions are issued, the block rate and size become a bottleneck in the system. It can no longer include all incoming transactions promptly. Attempts to speed up block rates will introduce more orphan blocks (blocks being left behind) and reduce the security of the blockchain."),(0,o.kt)("h3",{id:"mining-races"},"Mining Races"),(0,o.kt)("p",null,"In PoW-based DLTs, competition between nodes to obtain mining rewards and transaction fees are known as mining races. These are undesirable as they favor more powerful nodes, especially those with highly optimized hardware like ASICs. As such,\nthey block participation by regular or IoT hardware and are harmful for the environment."),(0,o.kt)("h3",{id:"nakamoto-consensus"},"Nakamoto Consensus"),(0,o.kt)("p",null,"Named after the originator of Bitcoin, Satoshi Nakamoto, Nakamoto consensus describes the replacement of voting/communication between known agents with a cryptographic puzzle (Proof-of-Work). Completing the puzzle determines which agent is the next to act."),(0,o.kt)("h3",{id:"proof-of-work"},"Proof of Work"),(0,o.kt)("p",null,"Data which is difficult (costly, time-consuming) to produce but easy for others to verify."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"coordinator"},"Coordinator"),(0,o.kt)("p",null,"A trusted entity that issues milestones to guarantee finality and protect the Tangle against attacks."),(0,o.kt)("h3",{id:"milestones"},"Milestones"),(0,o.kt)("p",null,"Milestones are transactions signed and issued by the Coordinator. Their main goal is to help the Tangle to grow healthily and to guarantee finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the state of that transaction and its entire history as confirmed."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"markers"},"Markers"),(0,o.kt)("p",null,"A tool that exists only locally and allows performing certain calculations more efficiently. Such as approval weight calculation or the existence of certain messages in the past or future cone of another message."),(0,o.kt)("h2",{id:"network-layer"},"Network Layer"),(0,o.kt)("p",null,"This layer manages the lower layers of internet communication like TCP. It is the most technical, and in some ways the least interesting. In this layer, the connections between nodes are managed by the autopeering and peer discovery modules and the gossip protocol."),(0,o.kt)("h3",{id:"eclipse-attack"},"Eclipse Attack"),(0,o.kt)("p",null,"A cyber-attack that aims to isolate and attack a specific user, rather than the whole network."),(0,o.kt)("h3",{id:"neighbors"},"Neighbors"),(0,o.kt)("p",null,"Network nodes that are directly connected and can exchange messages without intermediate nodes."),(0,o.kt)("h3",{id:"node"},"Node"),(0,o.kt)("p",null,"A machine which is part of the IOTA network. Its role is to issue new transactions and to validate existing ones."),(0,o.kt)("h3",{id:"peering"},"Peering"),(0,o.kt)("p",null,"The procedure of discovering and connecting to other network nodes."),(0,o.kt)("h3",{id:"small-world-network"},"Small World Network"),(0,o.kt)("p",null,"A network in which most nodes can be reached from every other node by a few intermediate steps."),(0,o.kt)("h3",{id:"splitting-attack"},"Splitting Attack"),(0,o.kt)("p",null,"An attack in which a malicious node attempts to split the Tangle into two branches. As one of the branches grows, the attacker publishes transactions on the other branch to keep both alive. Splitting attacks attempt to slow down the consensus process or conduct a double spend."),(0,o.kt)("h3",{id:"sybil-attack"},"Sybil Attack"),(0,o.kt)("p",null,"An attempt to gain control over a peer-to-peer network by forging multiple fake identities."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"tangle"},"Tangle"),(0,o.kt)("p",null,"An append only message data structure where each message references (at least) two other messages."),(0,o.kt)("h3",{id:"subtangle"},"Subtangle"),(0,o.kt)("p",null,"A consistent section of the Tangle (i.e. a subset of messages), such that each included message also includes its referenced messages."),(0,o.kt)("hr",null))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);