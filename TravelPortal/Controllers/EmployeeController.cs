using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelPortal.Models;
using TravelPortal.Services;

namespace TravelPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCors")]

    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeService _repo;

        public EmployeeController(EmployeeService repo)
        {
            _repo = repo;
        }

        [HttpPost]
        [Route("Register")]

        public ActionResult<Employee> Create(Employee user)
        {
            var emp = _repo.Register(user);
            if (emp == null)
            {
                return BadRequest("Employee not created");
            }
            return Created("Employee Added", emp);
        }


        [HttpPost]
        [Route("Login")]
        public ActionResult<Employee> Login(Employee user)
        {
            var emp = _repo.Login(user);
            if (emp == null)
            {
                return BadRequest("Employee Name or Password Invalide");
            }
            return Created("Employee Loing successfully", emp);
        }


    }
}
