import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import {PageHeader, Button} from 'react-bootstrap'
export class Sets extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();
        this.state = {};
    }

    public render() {
        return <div>
            
            <PageHeader className="HeaderStyle">Welcome to the sets page! </PageHeader>
            <h2 className="HeaderStyle">Choose a category</h2>
            <br/>
            <div className="categoriesrow">
            <div className="categories">
            <NavLink to={ '/NinjagoSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://pbs.twimg.com/media/Cl9q5-1WYAAfHL7.jpg:large" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/NinjagoSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">LEGO NINJAGO</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/StarwarsSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/05/lego_main.jpg?itok=OYmDXcmD" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/StarwarsSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">LEGO STARWARS</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/LegoCitySets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://torrentsgames.org/wp-content/uploads/2017/01/Lego-City-Undercover-Xbox360.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/LegoCitySets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">LEGO CITY</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/DuploSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://www.parentmap.com/images/article/6670/kids-with-lego.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/DuploSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">LEGO KIDS</Button> </NavLink>     
            </div> 
              
            <div className="categories">
            <NavLink to={ '/AdvancedModelsSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://www.repubrick.com/images/stories/virtuemart/product/lego10189.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/AdvancedModelsSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">ADVANCED MODELS</Button> </NavLink>     
            </div> 


            <div className="categories">
            <NavLink to={ '/CastleSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://images.brickset.com/sets/images/6098-1.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/CastleSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">CASTLE</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/PiratesSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://www.powerofthebrick.com/wp-content/uploads/2015/04/6285.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/PiratesSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">PIRATES</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/HarryPotterSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://www.gaminglives.com/wp-content/uploads/lego_harry_potter_packshot_enlrg.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/HarryPotterSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">HARRY POTTER</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/ArchitectureSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://images.brickset.com/sets/large/21006-1.jpg?201006060327" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/ArchitectureSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">ARCHITECTURE</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/LordOfTheRingsSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://files.gamebanana.com/img/ss/reviews/578e65c6e0ce4.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/LordOfTheRingsSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">The Lord of the Rings</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/MinecraftSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/products/minecraft/2017/thumb/lego_21137_web_pri_720.png?l.r2=-1728230338" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/MinecraftSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Minecraft</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/MonsterFightsSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://www.repubrick.com/images/stories/virtuemart/product/lego9462.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/MonsterFightsSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Monster Fighters</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/ClassicSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/products/product%20portal/box1_1488/lego_10696_box1_na_1488.png?l.r2=1147600486" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/ClassicSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Classic</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/DCCSHSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/dccomicssuperheroes/-/media/franchises/dc%20comics%20super%20heroes%202014/cross%20site/characters-720x430v2.jpg?l.r2=-1445020815" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/DCCSHSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">DC Comics Super Heroes</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/SeriousPlaySets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://seriousplaypro.com/wp-content/uploads/2015/09/LEGO-SERIOUS-PLAY-workshop-by-Rafiq-Elmansy.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/SeriousPlaySets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Serious Play (business)</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/EducationSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://le-www-live-s.legocdn.com/images/423923/live/sc/Products/9686/9686_1050x1050_1_xx-xx/16eaaae7bf34ee9f33f6f670433d2392/2a4c9278-6895-4b45-9ea0-a58d00d7de98/original/2a4c9278-6895-4b45-9ea0-a58d00d7de98.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/EducationSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Education</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/BionicleSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/franchises/bionicle%202014/characters/images/character%20top%20images%2016x9/resized/70787-tahu-top-image_744w_2x.jpg?l.r2=-457231216" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/BionicleSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Bionicle</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/HeroFactorySets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://lego.brickinstructions.com/44000/44022/001.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/HeroFactorySets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">HERO Factory</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/FusionSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://trends.cmf-fmc.ca/media/uploads/blog/videogames-are-bringing-toys-back-to-life2.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/FusionSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Fusion</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/AtlantisSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://i.ytimg.com/vi/aRzMGrvmqOQ/maxresdefault.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/AtlantisSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Atlantis</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/FriendsLegoSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/friends/-/media/franchises/friends2014/home2017/bottom%20touts/mdp.jpg?l.r2=1047587655" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/FriendsLegoSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Friends</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/MSHSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://wbo2hhkgdnexdedu-zippykid.netdna-ssl.com/wp-content/uploads/2013/12/468px-882552_623768627674563_1467396299_o.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/MSHSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Marvel Super Heroes</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/SpaceSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://a248.e.akamai.net/cache.lego.com/r/www/r/legohistory/-/media/idea%20house/virtual%20idea%20house/images/basic%20item%20images/products/space/5a.jpg?l.r2=884410149" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/SpaceSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Space</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/PromotionalSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://maoincheoil.com/wp-content/uploads/2015/04/Special_Promotions_Header.png" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/PromotionalSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Promotional</Button> </NavLink>     
            </div>   

            <div className="categories">
            <NavLink to={ '/SeasonalSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/products/product%20portal/creator/10254/lego_10254_web_pri_720.jpg?l.r2=972699370" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/SeasonalSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Seasonal</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/GamesSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://img.game.co.uk/hub/images/LEGOFranchise/hub_LEGO_TopLogo.png" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/GamesSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Games</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/ElvesSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/catalogs/-/media/franchises/elves/videos/images/lego_elves_1488x838.jpg?l.r2=-1703915826" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/ElvesSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Elves</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/MixelsSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://vignette.wikia.nocookie.net/mixels/images/8/8e/Lixers_Max_trans.png/revision/latest?cb=20150509060608" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/MixelsSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Mixels</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/DinoSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="http://thebricklife.com/wp-content/uploads/Lego-Dino-Defence-HQ-5887.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/DinoSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Dino</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/TheSimpsonsSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://images-na.ssl-images-amazon.com/images/I/71wyRiWotzL._SL1001_.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/TheSimpsonsSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">The Simpsons</Button> </NavLink>     
            </div>

            <div className="categories">
            <NavLink to={ '/PharaohsQuestSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://c1.staticflickr.com/6/5149/5631616137_cb6b1c5dde.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/PharaohsQuestSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">The Pharaoh's Quest</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/JurassicWorldSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://lc-www-live-s.legocdn.com/r/www/r/jurassicworld/-/media/franchises/jurassic%202014/games/video%20games/boxshot_screenshot_001.jpg?l.r2=1900980726" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/JurassicWorldSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Jurassic World</Button> </NavLink>     
            </div> 

            <div className="categories">
            <NavLink to={ '/PowerMinersSets' }  activeClassName='active'> <Button bsStyle="red" bsSize="small"><img src="https://i.ytimg.com/vi/cT_qmS0piCI/maxresdefault.jpg" width={300} height={200}/></Button> </NavLink>
            <br/>
            <NavLink to={ '/PowerMinersSets' }  activeClassName='active'> <Button className="hoii" bsStyle="danger" bsSize="small">Power Miners</Button> </NavLink>     
            </div>   
            </div>                                                                                     
    </div>
    
    }
}