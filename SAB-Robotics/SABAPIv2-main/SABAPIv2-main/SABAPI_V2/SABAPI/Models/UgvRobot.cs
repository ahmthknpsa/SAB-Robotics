using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SABApi.Models
{
    public class UgvRobot
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("ugvName")]
        public string ugvName { get; set; } = null!;

        [BsonElement("ugvColor")]
        public string ugvColor { get; set; } = null!;

        [BsonElement("ugvDistance")]
        public double ugvDistance { get; set; }


        [BsonElement("ugvHerbicide")]
        public double ugvHerbicide { get; set; }


        [BsonElement("carLat")]
        public double carLat { get; set; }

        [BsonElement("carLong")]
        public double carLong { get; set; }

        [BsonElement("carLoc")]
        public string carLoc { get; set; } = null!;

        [BsonElement("ugvMission")]
        public string ugvMission { get; set; } = null!;

        [BsonElement("ugvSpeed")]
        public double ugvSpeed { get; set; }

        [BsonElement("InfoDate")]
        public DateTime InfoDate { get; set; }

        [BsonElement("no")]
        public int No { get; set; }

        [BsonElement("siraUzunlugu")]
        public int? SiraUzunlugu { get; set; }

        [BsonElement("ikiSiraArasiMesafe")]
        public double? IkiSiraArasiMesafe { get; set; }

        [BsonElement("toplamSiraSayisi")]
        public int? ToplamSiraSayisi { get; set; }

        [BsonElement("donusDerecesi")]
        public double? DonusDerecesi { get; set; }

        [BsonElement("ilkDonusAcisi")]
        public double? IlkDonusAcisi { get; set; }
    }
}
