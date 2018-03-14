using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using project56.model;
using System.IO;




namespace project56.Controllers
{
    [Route("custom")]
    public class custom : Controller
    {
        LegoContext _context;
        public custom(LegoContext context)
        {

            _context = context;
        }

        [HttpPut("Lego")]
        public void FindLegoDb([FromBody]string file)
        {
            string content = file;
            foreach (string line in content.Split("\n").Skip(0))
            {

                var columns = line.Split(",");
                var Item_Number = columns[0];
                var Name = columns[1]; 
                var Year = columns[2];
                var Theme = columns[3];
                var Subtheme = columns[4];
                var Pieces = columns[5];
                var Minifigures = columns[6];
                var Image_URL = columns[7];
                var GBP_MSRP = columns[8];
                var USD_MSRP = columns[9];
                var CAD_MSRP = columns[10];
                var EUR_MSRP = columns[11];
                var Packaging = columns[12];
                var Availability = columns[13];
                Lego lego = new Lego
                {
                    Item_Number = Item_Number,
                    Name = Name,
                    Year = Year,
                    Theme = Theme,
                    Subtheme = Subtheme,
                    Pieces = Pieces,
                    Minifigures = Minifigures,
                    Image_URL = Image_URL,
                    GBP_MSRP = GBP_MSRP,
                    USD_MSRP = USD_MSRP,
                    CAD_MSRP = CAD_MSRP,
                    EUR_MSRP = EUR_MSRP,
                    Packaging = Packaging,
                    Availability = Availability
                };


                _context.Add(lego);
                _context.SaveChanges();
            }

        }
        [HttpGet("Product")]
        public Lego[] Product()
        {
            return _context.Legos.ToArray();
        }

       




        // ------------------------------------------------
        // ALL THE CATEGORIE SETS WITH THE RELATED PRODUCTS

        [HttpGet("LegoStarwars/{theme}")]
        public Lego[] LegoStarwars(string theme)
        {
            var starwars = from _starwars in _context.Legos
                           where _starwars.Theme == theme
                           select _starwars;
                           //select new Lego(){Item_Number=_starwars.Item_Number, Availability=_starwars.Availability,CAD_MSRP=_starwars.CAD_MSRP,EUR_MSRP=_starwars.EUR_MSRP,GBP_MSRP=_starwars.GBP_MSRP,Image_URL=_starwars.Image_URL,Minifigures=_starwars.Minifigures,Name=_starwars.Name,Packaging=_starwars.Packaging,Pieces=_starwars.Pieces,Subtheme=_starwars.Subtheme,Theme=_starwars.Theme,USD_MSRP=_starwars.USD_MSRP,Year=_starwars.Year};
            
            return starwars.ToArray();               
                            
        }

        [HttpGet("LegoCity/{theme}")]
        public Lego[] LegoCity(string theme)
        {
            var legocity = from _legocity in _context.Legos
                           where _legocity.Theme == theme
                           select _legocity;
                          
            return legocity.ToArray();               
                            
        }

        [HttpGet("PairedThemes/{theme}/{themetwo}/{themethree}")]
        public Lego[] PairedThemes(string theme, string themetwo, string themethree)
        {
            var advancedmodels =  _context.Legos.Where (c => c.Theme.Contains (theme) || c.Theme.Contains (themetwo) || c.Theme.Contains (themethree));;
                          
            return advancedmodels.ToArray();               
                            
        }

        [HttpGet("TwoThemes/{theme}/{themetwo}")]
        public Lego[] TwoThemes(string theme, string themetwo)
        {
            var advancedmodels =  _context.Legos.Where (c => c.Theme.Contains (theme) || c.Theme.Contains (themetwo));;
                          
            return advancedmodels.ToArray();               
                            
        }

        [HttpGet("Duplo/{theme}")]
        public Lego[] Duplo(string theme)
        {
            var duplo = from _duplo in _context.Legos
                           where _duplo.Theme == theme
                           select _duplo;
                           
            return duplo.ToArray();               
                            
        }


        [HttpGet("CastleSets/{theme}")]
        public Lego[] CastleSets(string theme)
        {
            var castle = from _castle in _context.Legos
                           where _castle.Theme == theme
                           select _castle;
                           
            return castle.ToArray();               
                            
        }

        [HttpGet("PiratesSets/{theme}")]
        public Lego[] PiratesSets(string theme)
        {
            var pirates = from _pirates in _context.Legos
                           where _pirates.Theme == theme
                           select _pirates;
                           
            return pirates.ToArray();               
                            
        }

        [HttpGet("HarryPotterSets/{theme}")]
        public Lego[] HarryPotterSets(string theme)
        {
            var harrypotter = from _harrypotter in _context.Legos
                           where _harrypotter.Theme == theme
                           select _harrypotter;
                           
            return harrypotter.ToArray();               
                            
        }

        [HttpGet("NinjagoSets/{theme}")]
        public Lego[] NinjagoSets(string theme)
        {
            var ninjago = from _ninjago in _context.Legos
                           where _ninjago.Theme == theme
                           select _ninjago;
                           
            return ninjago.ToArray();               
                            
        }

        [HttpGet("ArchitectureSets/{theme}")]
        public Lego[] ArchitectureSets(string theme)
        {
            var architecture = from _architecture in _context.Legos
                           where _architecture.Theme == theme
                           select _architecture;
                           
            return architecture.ToArray();               
                            
        }

        [HttpGet("LordOfTheRingsSets/{theme}")]
        public Lego[] LordOfTheRingsSets(string theme)
        {
            var lotr = from _lotr in _context.Legos
                           where _lotr.Theme == theme
                           select _lotr;
                           
            return lotr.ToArray();               
                            
        }

         [HttpGet("MinecraftSets/{theme}")]
        public Lego[] MinecraftSets(string theme)
        {
            var minecraft = from _minecraft in _context.Legos
                           where _minecraft.Theme == theme
                           select _minecraft;
                           
            return minecraft.ToArray();               
                            
        }

         [HttpGet("MonsterFightsSets/{theme}")]
        public Lego[] MonsterFightsSets(string theme)
        {
            var monsterfights = from _monsterfights in _context.Legos
                           where _monsterfights.Theme == theme
                           select _monsterfights;
                           
            return monsterfights.ToArray();               
                            
        }

        [HttpGet("ClassicSets/{theme}")]
        public Lego[] ClassicSets(string theme)
        {
            var classic = from _classic in _context.Legos
                           where _classic.Theme == theme
                           select _classic;
                           
            return classic.ToArray();               
                            
        }

        [HttpGet("DCCSHSets/{theme}")]
        public Lego[] DCCSHSets(string theme)
        {
            var dccsh = from _dccsh in _context.Legos
                           where _dccsh.Theme == theme
                           select _dccsh;
                           
            return dccsh.ToArray();               
                            
        }

        [HttpGet("SeriousPlaySets/{theme}")]
        public Lego[] SeriousPlaySets(string theme)
        {
            var seriousplay = from _seriousplay in _context.Legos
                           where _seriousplay.Theme == theme
                           select _seriousplay;
                           
            return seriousplay.ToArray();               
                            
        }

        [HttpGet("EducationSets/{theme}")]
        public Lego[] EducationSets(string theme)
        {
            var education = from _education in _context.Legos
                           where _education.Theme == theme
                           select _education;
                           
            return education.ToArray();               
                            
        }

        [HttpGet("BionicleSets/{theme}")]
        public Lego[] BionicleSets(string theme)
        {
            var bionicle = from _bionicle in _context.Legos
                           where _bionicle.Theme == theme
                           select _bionicle;
                           
            return bionicle.ToArray();               
                            
        }

        [HttpGet("HeroFactorySets/{theme}")]
        public Lego[] HeroFactorySets(string theme)
        {
            var herofactory = from _herofactory in _context.Legos
                           where _herofactory.Theme == theme
                           select _herofactory;
                           
            return herofactory.ToArray();               
                            
        }

        [HttpGet("FusionSets/{theme}")]
        public Lego[] FusionSets(string theme)
        {
            var fusion = from _fusion in _context.Legos
                           where _fusion.Theme == theme
                           select _fusion;
                           
            return fusion.ToArray();               
                            
        }

        [HttpGet("AtlantisSets/{theme}")]
        public Lego[] AtlantisSets(string theme)
        {
            var atlantis = from _atlantis in _context.Legos
                           where _atlantis.Theme == theme
                           select _atlantis;
                           
            return atlantis.ToArray();               
                            
        }

        [HttpGet("FriendsLegoSets/{theme}")]
        public Lego[] FriendsLegoSets(string theme)
        {
            var friendslego = from _friendslego in _context.Legos
                           where _friendslego.Theme == theme
                           select _friendslego;
                           
            return friendslego.ToArray();               
                            
        }

        [HttpGet("MSHSets/{theme}")]
        public Lego[] MSHSets(string theme)
        {
            var msh = from _msh in _context.Legos
                           where _msh.Theme == theme
                           select _msh;
                           
            return msh.ToArray();               
                            
        }

        [HttpGet("SpaceSets/{theme}")]
        public Lego[] SpaceSets(string theme)
        {
            var space = from _space in _context.Legos
                           where _space.Theme == theme
                           select _space;
                           
            return space.ToArray();               
                            
        }

        [HttpGet("PromotionalSets/{theme}")]
        public Lego[] PromotionalSets(string theme)
        {
            var promotional = from _promotional in _context.Legos
                           where _promotional.Theme == theme
                           select _promotional;
                           
            return promotional.ToArray();               
                            
        }

        [HttpGet("SeasonalSets/{theme}")]
        public Lego[] SeasonalSets(string theme)
        {
            var seasonal = from _seasonal in _context.Legos
                           where _seasonal.Theme == theme
                           select _seasonal;
                           
            return seasonal.ToArray();               
                            
        }

        [HttpGet("GamesSets/{theme}")]
        public Lego[] GamesSets(string theme)
        {
            var games = from _games in _context.Legos
                           where _games.Theme == theme
                           select _games;
                           
            return games.ToArray();               
                            
        }

        [HttpGet("ElvesSets/{theme}")]
        public Lego[] ElvesSets(string theme)
        {
            var elves = from _elves in _context.Legos
                           where _elves.Theme == theme
                           select _elves;
                           
            return elves.ToArray();               
                            
        }

        [HttpGet("MixelsSets/{theme}")]
        public Lego[] MixelsSets(string theme)
        {
            var mixels = from _mixels in _context.Legos
                           where _mixels.Theme == theme
                           select _mixels;
                           
            return mixels.ToArray();               
                            
        }

        [HttpGet("DinoSets/{theme}")]
        public Lego[] DinoSets(string theme)
        {
            var dino = from _dino in _context.Legos
                           where _dino.Theme == theme
                           select _dino;
                           
            return dino.ToArray();               
                            
        }

        [HttpGet("TheSimpsonsSets/{theme}")]
        public Lego[] TheSimpsonsSets(string theme)
        {
            var thesimpsons = from _thesimpsons in _context.Legos
                           where _thesimpsons.Theme == theme
                           select _thesimpsons;
                           
            return thesimpsons.ToArray();               
                            
        }

        [HttpGet("PharaohsQuestSets/{theme}")]
        public Lego[] PharaohsQuestSets(string theme)
        {
            var pharaohsquest = from _pharaohsquest in _context.Legos
                           where _pharaohsquest.Theme == theme
                           select _pharaohsquest;
                           
            return pharaohsquest.ToArray();               
                            
        }

        [HttpGet("JurassicWorldSets/{theme}")]
        public Lego[] JurassicWorldSets(string theme)
        {
            var jurassicsworld = from _jurassicsworld in _context.Legos
                           where _jurassicsworld.Theme == theme
                           select _jurassicsworld;
                           
            return jurassicsworld.ToArray();               
                            
        }

        [HttpGet("PowerMinersSets/{theme}")]
        public Lego[] PowerMinersSets(string theme)
        {
            var powerminers = from _powerminers in _context.Legos
                           where _powerminers.Theme == theme
                           select _powerminers;
                           
            return powerminers.ToArray();  
        }             
                            
        [HttpGet("GetStarwars/{theme}")]
        public Lego[] GetStarwars(string theme){
            var starwars = from _starwars in _context.Legos
                           where _starwars.Theme == theme
                           select _starwars;
            return starwars.ToArray(); 
        }

        [HttpGet("CorrectProduct/{item_Number}")]
        public Lego CorrectProduct(string item_Number)
        {
            var correctproduct = from _correctproduct in _context.Legos
                           where  _correctproduct.Item_Number == item_Number
                           select _correctproduct;
                           
                           
            return correctproduct.FirstOrDefault();               
                            
        }
    }
}