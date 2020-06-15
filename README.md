# mupt
Minecraft Tellraw Generator

* Player
  * Networking
    - [Join Message](#player_join)
    - [Leave Message](#player_leave)
  * Deaths
    - [Death by entity](#player_death-by-entity)
    - [Hitting the ground too hard while escaping from entity](#player_death-by-entity-fall)
    - [Drowning while escaping from entity](#player_death-by-entity-drown)
    
# Checklist
- [ ] Add all deaths
- [x] Make it look better

### player_join
Simulates a player join message

Prop | Desciption
-----|-----------
player | Player to target

### player_leave
Simulates a player leave message

Prop | Desciption
-----|-----------
player | Player to target

### player_death-by-entity
Simulates a player leave message

Prop | Desciption
-----|-----------
victim | Person who gets killed
killer | Person who does the killing

### player_death-by-entity-fall
Simulates a player falling to their death while trying to escape another entity

Prop | Desciption
-----|-----------
victim | Person who gets killed
killer | Person who does the killing

### player_death-by-entity-drown
Simulates a player leave message

Prop | Desciption
-----|-----------
victim | Person who gets killed
killer | Person who does the killing
