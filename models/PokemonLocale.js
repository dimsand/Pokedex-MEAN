var mongoose = require('mongoose');

var PokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  name_fr: String,
  sprites: {
    front_default: String
  },
  types: [{ }],
  weight: Number,
  height: Number,
  color: { type: String, default: '#444' },
  stats: [{ }],
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pokemon', PokemonSchema);