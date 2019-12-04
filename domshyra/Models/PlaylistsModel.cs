﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace domshyra.Models
{
    public class PlaylistsModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string AppleMusicLink { get; set; }
        public string SpotifyMusicLink { get; set; }
        public string ImageURL { get; set; }
        public string SpotifyId { get; set; }
        public string TrackCount { get; set; }
    }
}
