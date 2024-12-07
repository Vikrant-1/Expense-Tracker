import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScaleView from '../touchablesComp/ScaleView';

// Define types for props
interface TagProps {
  title: string;
}

interface TileProps {
  title: string;
  subTitle?: string; 
  icon: string;
  tag?: string; 
  onPress?: () => void;
}

const Tag: React.FC<TagProps> = ({title}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{title}</Text>
    </View>
  );
};

const Tile: React.FC<TileProps> = ({title, subTitle, icon, tag, onPress}) => {
  return (
    <ScaleView onPress={onPress} style={styles.container}>
      {/* Left Icon */}
      <View style={styles.left}>
        <Icon name={icon} size={30} color="#000" />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
          {tag && <Tag title={tag} />}
        </View>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      {/* Right Arrow */}
      <View style={styles.right}>
        <Icon name={"arrow-forward-ios"} size={24} color="#B0B0B0" />
      </View>
    </ScaleView>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  left: {
    marginRight: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  right: {
    marginLeft: 16,
  },
  tag: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: '#1E88E5',
    fontWeight: '500',
  },
});
