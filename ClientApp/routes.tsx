import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Sets } from './components/Sets';
import { Sale } from './components/Sale';
import { Product } from './components/Product';
import { Login } from './components/Login';
import { Registreren } from './components/registreren';
import { SeparateBricks } from './components/SeparateBricks';
import { databasebutton } from './components/databasebutton';
import {CorrectProduct} from './Components/DetailProduct';

import { LegoCitySets } from './components/legoCitySets';
import { AdvancedModelsSets } from './components/AdvancedModelsSets';
import {KidsSets} from './components/DuploSets'
import {CastleSets} from './components/CastleSets'
import {PiratesSets} from './components/PiratesSets'
import { StarwarsSets } from './components/StarwarsSets';
import { HarryPotterSets } from './components/HarryPotterSets';
import { NinjagoSets } from './components/NinjagoSets';
import { ArchitectureSets } from './components/ArchitectureSets';
import { LordOfTheRingsSets } from './components/LordOfTheRingsSets';
import { MinecraftSets } from './components/MinecraftSets';
import { MonsterFightsSets } from './components/MonsterFightsSets';
import { ClassicSets } from './components/ClassicSets';
import { DCCSHSets } from './components/DCCSHSets';
import { SeriousPlaySets } from './components/SeriousPlaySets';
import { EducationSets } from './components/EducationSets';
import { BionicleSets } from './components/BionicleSets';
import { HeroFactorySets } from './components/HeroFactorySets';
import { FusionSets } from './components/FusionSets';
import { AtlantisSets } from './components/AtlantisSets';
import { FriendsLegoSets } from './components/FriendsLegoSets';
import { MSHSets } from './components/MSHSets';
import { SpaceSets } from './components/SpaceSets';
import { PromotionalSets } from './components/PromotionalSets';
import { SeasonalSets } from './components/SeasonalSets';
import { GamesSets } from './components/GamesSets';
import { ElvesSets } from './components/ElvesSets';
import { MixelsSets } from './components/MixelsSets';
import { DinoSets } from './components/DinoSets';
import { TheSimpsonsSets } from './components/TheSimpsonsSets';
import { PharaohsQuestSets } from './components/PharaohsQuestSets';
import { JurassicWorldSets } from './components/JurassicWorldSets';
import { PowerMinersSets } from './components/PowerMinersSets';
import {WishlistRouter} from './components/Wishlist'
import {ShoppingCartRouter} from './components/Shoppingcart'
import {Wishlist} from './components/Wishlist'
import {loggedIn} from './components/LoggedIn'
import {Checkout} from './components/Checkout'
import {HistoryPage} from './components/HistoryPage'
import {PurchaseRoute} from './components/Checkout'

// import {WishlistRouter} from './components/WishlistRouter'

import {filtertest} from './Components/filtertest'
import {adminmode} from './Components/AdminMode'


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/sale' component={ Sale } />
    <Route path='/sets' component={ Sets } />
    <Route path='/product' component={ Product } />
    <Route path='/login' component={ Login } />
    <Route path='/registreren' component={ Registreren } />
    <Route path='/DetailProduct/:item_Number' component={ CorrectProduct } />
    {/* <Route path='/WishlistRouter/:id' component={ WishlistRouter } /> */}

    <Route path='/StarwarsSets' component={ StarwarsSets } />
    <Route path='/LegoCitySets' component={ LegoCitySets } />
    <Route path='/DuploSets' component={ KidsSets } />
    <Route path='/CastleSets' component={ CastleSets } />
    <Route path='/PiratesSets' component={ PiratesSets } />
    <Route path='/AdvancedModelsSets' component={ AdvancedModelsSets } />
    <Route path='/KidsSets' component={ KidsSets } />
    <Route path='/HarryPotterSets' component={ HarryPotterSets } />
    <Route path='/NinjagoSets' component={ NinjagoSets } />
    <Route path='/ArchitectureSets' component={ ArchitectureSets } />
    <Route path='/LordOfTheRingsSets' component={ LordOfTheRingsSets } />
    <Route path='/MinecraftSets' component={ MinecraftSets } />
    <Route path='/MonsterFightsSets' component={ MonsterFightsSets } />
    <Route path='/ClassicSets' component={ ClassicSets } />
    <Route path='/DCCSHSets' component={ DCCSHSets } />
    <Route path='/SeriousPlaySets' component={ SeriousPlaySets } />
    <Route path='/EducationSets' component={ EducationSets } />
    <Route path='/BionicleSets' component={ BionicleSets } />
    <Route path='/HeroFactorySets' component={ HeroFactorySets } />
    <Route path='/FusionSets' component={ FusionSets } />
    <Route path='/AtlantisSets' component={ AtlantisSets } />
    <Route path='/FriendsLegoSets' component={ FriendsLegoSets } />
    <Route path='/MSHSets' component={ MSHSets } />
    <Route path='/SpaceSets' component={ SpaceSets } />
    <Route path='/PromotionalSets' component={ PromotionalSets } />
    <Route path='/SeasonalSets' component={ SeasonalSets } />
    <Route path='/GamesSets' component={ GamesSets } />
    <Route path='/ElvesSets' component={ ElvesSets } />
    <Route path='/MixelsSets' component={ MixelsSets } />
    <Route path='/DinoSets' component={ DinoSets } />
    <Route path='/TheSimpsonsSets' component={ TheSimpsonsSets } />
    <Route path='/PharaohsQuestSets' component={ PharaohsQuestSets } />
    <Route path='/JurassicWorldSets' component={ JurassicWorldSets } />
    <Route path='/PowerMinersSets' component={ PowerMinersSets } />

    <Route path='/SeparateBricks' component={ SeparateBricks } />
    <Route path='/databasebutton' component={databasebutton} />
    <Route path= '/filtertest' component={filtertest}/>
    <Route path= '/AdminMode' component={adminmode}/>
    <Route path= '/Wishlist' component={WishlistRouter}/>
    <Route path= '/Shoppingcart' component={ShoppingCartRouter}/>
    <Route path= '/LoggedIn' component ={loggedIn} />
    <Route path= '/Checkout' component ={Checkout} />
    <Route path= '/HistoryPage' component ={HistoryPage} />
    <Route path= '/PurchaseRoute' component ={PurchaseRoute} />
    
</Layout>; 

