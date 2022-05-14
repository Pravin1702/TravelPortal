using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelAPI.Models;
using TravelAPI.Services;

namespace TravelAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCors")]
    public class UserController : ControllerBase
    {

        private readonly UserService _repo;

        public UserController(UserService repo)
        {
            _repo = repo;
        }
        // Create
        [HttpPost]
        [Route("Register")]

        public async Task<ActionResult<User>> Register(User user)
        {
            var emp =await _repo.Register(user);
            if (emp == null)
            {
                return BadRequest("Employee not created");
            }
            return Created("Employee Added", emp);
        }

        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<User>> Login(User user)
        {
            var emp =await _repo.Login(user);
            if (emp == null)
            {
                return BadRequest("Employee Name or Password Invalide");
            }
            return Created("Employee Loing successfully", emp);
        }

        [HttpGet]
        [Route("GetAll_Employees")]

        public ActionResult<IEnumerable<User>> GetAllProducts()
        {
            var prd = _repo.GetAll().ToList();
            if (prd.Count == 0)
                return NotFound("No Employee present");
            return prd;
        }

    }
}
