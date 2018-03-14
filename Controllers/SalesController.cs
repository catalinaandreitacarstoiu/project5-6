using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using project56.model;

namespace project56.Controllers
{
    [Route("SalesController")]
    public class SalesController : Controller
    {
        private readonly LegoContext _context;
        
        public SalesController(LegoContext context)
        {
            _context = context;
        }

        [HttpGet("allsales")]
        public ClassSales[] allsales()
        {
            return _context.Monthlys.OrderByDescending(d => d.year).ThenBy(d => d.month).Take(12).ToArray();
        }

        [HttpPost("AddSales/{maand}/{jaar}/{amount}")]
        public void AddSales(int maand, int jaar, float amount)
        {
            var item = _context.Monthlys.FirstOrDefault(d => d.month == maand && d.year == jaar);
            item.totalsales = item.totalsales + amount;
            _context.SaveChanges();
            Console.WriteLine(amount);
        }

        [HttpPost("thisMonth/{maand}/{jaar}")]
        public void thisMonth(int maand, int jaar)
        {
            var item =_context.Monthlys.FirstOrDefault(m => m.month == maand && m.year == jaar);
            if (item == null) 
            { 
                item = new ClassSales() { month = maand, year = jaar, totalsales = 0 };
                _context.Monthlys.Add(item);
                _context.SaveChanges();
            }
            else { Console.WriteLine("month already exists"); }
        }
    }
}