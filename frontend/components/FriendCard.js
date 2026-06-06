import {View, Text, StyleSheet, Image} from 'react-native';

const DEFAULT_AVATAR = require('../assets/default-avatar.png');

function formatDuration(seconds) {
  if (!seconds) return null;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

export default function FriendCard({ username, name, hoursStudied, avatarURL}){
  const imageSource = avatarURL ? {uri: avatarURL} : DEFAULT_AVATAR;
  const formatted = formatDuration(hoursStudied);
  const hours = formatted ? `Studied ${formatted} this week` : 'Has not studied yet this week...';

  return (
    <View style={styles.card}>
      <View style={styles.buffer}>
        <Image
          source={imageSource}
          style={styles.avatar}
        />
      </View>
      
      <View style={styles.columnText}>

        <Text style={styles.name} numberOfLines={1}>
          {name} | @{username}
        </Text>
        
        <Text style={styles.subtitle}>
          {hours}
        </Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    borderWidth: 1.5,
    borderColor: 'dimgray',
  },
  buffer: {
    padding: 8
  },
  columnText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18
  },
  subtitle: {
    color: 'dimgray',
    fontSize: 14
  }
});