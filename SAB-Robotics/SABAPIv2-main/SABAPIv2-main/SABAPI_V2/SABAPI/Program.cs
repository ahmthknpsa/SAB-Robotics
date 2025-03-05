using SABApi.Models;
using SABApi.Services;

var builder = WebApplication.CreateBuilder(args);

// MongoDB Connection

builder.Services.Configure<UgvRobotSettings>(builder.Configuration.GetSection("UgvRobotMongoDB"));  // Eklenen satýr

builder.Services.AddSingleton<UgvRobotService>();  // Eklenen satýr



builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(5001); // to listen for incoming http connection on port 5001
    options.ListenAnyIP(7001, configure => configure.UseHttps()); // to listen for incoming https connection on port 7001
});

var app = builder.Build();

// CORS Configuration
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Access-Control-Allow-Origin", "*");
    context.Response.Headers.Add("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    context.Response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    await next();
});

app.UseCors(builder =>
{
    builder
        .AllowAnyOrigin()  // You can use .WithOrigins("http://localhost:3000") to specify a specific origin.
        .AllowAnyHeader()
        .AllowAnyMethod()
        .WithExposedHeaders("Content-Disposition"); // You can specify additional headers if needed.
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
