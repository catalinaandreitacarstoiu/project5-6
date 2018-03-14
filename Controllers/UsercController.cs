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
    public class UsercController : Controller
    {
        private readonly LegoContext _context;

        public UsercController(LegoContext context)
        {
            _context = context;
        }

        // GET: Userc
        public async Task<IActionResult> Index(string sortOrder,
                                                string searchString,
                                                string currentFilter,
                                                int? page)
        {
            ViewData["UNameSortParm"] = String.IsNullOrEmpty(sortOrder) ? "uname_desc" : "";
            ViewData["LNameSortParm"] = sortOrder == "LName" ? "lname_desc" : "Theme";
            ViewData["CurrentSort"] = sortOrder;

            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }

            ViewData["CurrentFilter"] = searchString;

            var users = from u in _context.Users
                        select u;

            if (!String.IsNullOrEmpty(searchString))
            {
                users = users.Where(u => u.UserName.ToLower().Contains(searchString.ToLower())
                                        || u.LastName.ToLower().Contains(searchString.ToLower()));
            }
            switch (sortOrder)
            {
                case "uname_desc":
                    users = users.OrderByDescending(u => u.UserName);
                    break;
                case "LName":
                    users = users.OrderBy(u => u.LastName);
                    break;
                case "lname_desc":
                    users = users.OrderByDescending(u => u.LastName);
                    break;
                default:
                    users = users.OrderBy(u => u.UserName);
                    break;
            }

            int pageSize = 10;
            return View(await PaginatedList<ClassUser>.CreateAsync(users.AsNoTracking(), page ?? 1, pageSize));
        }

        // GET: Userc/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var classUser = await _context.Users
                .SingleOrDefaultAsync(m => m.ID == id);
            if (classUser == null)
            {
                return NotFound();
            }

            return View(classUser);
        }

        // GET: Userc/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Userc/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,FirstName,LastName,UserName,EmailAdress,Password,Adress,PhoneNumber,country,date_of_birth,Gender")] ClassUser classUser)
        {
            if (ModelState.IsValid)
            {
                _context.Add(classUser);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(classUser);
        }

        // GET: Userc/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var classUser = await _context.Users.SingleOrDefaultAsync(m => m.ID == id);
            if (classUser == null)
            {
                return NotFound();
            }
            return View(classUser);
        }

        // POST: Userc/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,FirstName,LastName,UserName,EmailAdress,Password,Adress,PhoneNumber,country,date_of_birth,Gender")] ClassUser classUser)
        {
            if (id != classUser.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(classUser);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ClassUserExists(classUser.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(classUser);
        }

        // GET: Userc/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var classUser = await _context.Users
                .SingleOrDefaultAsync(m => m.ID == id);
            if (classUser == null)
            {
                return NotFound();
            }

            return View(classUser);
        }

        // POST: Userc/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var classUser = await _context.Users.SingleOrDefaultAsync(m => m.ID == id);
            _context.Users.Remove(classUser);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ClassUserExists(int id)
        {
            return _context.Users.Any(e => e.ID == id);
        }
    }
}
