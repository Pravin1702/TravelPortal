using TravelJWTApp.Models;

namespace TravelJWTApp.Services
{
    public interface ITokenService
    {
        public string GenerateToken(UserDTO user);
    }
}
