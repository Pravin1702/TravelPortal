using TravelJWTApp.Models;

namespace TravelJWTApp.Services
{
    public interface IUserService
    {
        Task<UserDTO> Register(UserDTO user);
        Task<UserDTO> Login(UserDTO user);
    }
}
