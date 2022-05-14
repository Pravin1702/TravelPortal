using System.Data.SqlClient;

namespace TravelPortal.Services
{
    public class RequestService
    {
        SqlConnection conn;
        public RequestService(IConfiguration configuration)
        {
            string strCon = configuration.GetConnectionString("conn");
            conn = new SqlConnection(strCon);
        }

    }
}
