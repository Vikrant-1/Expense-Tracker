import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface EmptyScreenViewProps {
  title: string;
  icon?: string;
  description?: string;
  actionTitle?: string;
  action?: () => void;
}

export const EmptyScreenView: React.FC<EmptyScreenViewProps> = ({
  title,
  icon = 'info',
  description,
  actionTitle,
  action,
}) => {
  return (
    <View style={styles.container}>
      {/* Icon Section */}
      {icon && <Icon name={icon} size={64} color="#ccc" style={styles.icon} />}

      {/* Title Section */}
      <Text style={styles.title}>{title}</Text>

      {/* Description Section */}
      {description && <Text style={styles.description}>{description}</Text>}

      {/* Action Button Section */}
      {actionTitle && action && (
        <TouchableOpacity style={styles.button} onPress={action}>
          <Text style={styles.buttonText}>{actionTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
