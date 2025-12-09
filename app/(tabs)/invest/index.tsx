import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '@/theme/theme';
import styles from './styles';

const InvestScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('trending');

  const categories = [
    { id: 'trending', label: 'Trending', icon: 'trending-up' },
    { id: 'tech', label: 'Technology', icon: 'phone-portrait' },
    { id: 'finance', label: 'Finance', icon: 'card' },
    { id: 'healthcare', label: 'Healthcare', icon: 'medical' },
  ];

  const trendingStocks = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 175.23,
      change: 2.15,
      changePercent: 1.24,
      sector: 'Technology',
      marketCap: '2.8T',
    },
    {
      symbol: 'NVDA',
      name: 'NVIDIA Corp.',
      price: 875.45,
      change: 25.30,
      changePercent: 2.98,
      sector: 'Technology',
      marketCap: '2.2T',
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corp.',
      price: 415.89,
      change: 8.76,
      changePercent: 2.15,
      sector: 'Technology',
      marketCap: '3.1T',
    },
    {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 245.67,
      change: -5.23,
      changePercent: -2.09,
      sector: 'Automotive',
      marketCap: '780B',
    },
  ];

  const investmentIdeas = [
    {
      title: 'AI & Machine Learning',
      description: 'Invest in companies leading the AI revolution',
      stocks: ['NVDA', 'GOOGL', 'MSFT'],
      performance: '+15.2%',
      riskLevel: 'Medium',
    },
    {
      title: 'Clean Energy',
      description: 'Sustainable energy solutions for the future',
      stocks: ['TSLA', 'ENPH', 'NEE'],
      performance: '+8.7%',
      riskLevel: 'Medium-High',
    },
    {
      title: 'Dividend Champions',
      description: 'Stable companies with consistent dividends',
      stocks: ['KO', 'JNJ', 'PG'],
      performance: '+4.3%',
      riskLevel: 'Low',
    },
  ];

  const renderCategoryButton = (category: any) => (
    <TouchableOpacity
      key={category.id}
      style={[
        styles.categoryButton,
        selectedCategory === category.id && styles.activeCategoryButton
      ]}
      onPress={() => setSelectedCategory(category.id)}
    >
      <Ionicons 
        name={category.icon as any} 
        size={16} 
        color={selectedCategory === category.id ? theme.colors.white : theme.colors.textSecondary} 
      />
      <Text style={[
        styles.categoryButtonText,
        selectedCategory === category.id && styles.activeCategoryButtonText
      ]}>
        {category.label}
      </Text>
    </TouchableOpacity>
  );

  const renderStockCard = (stock: any) => (
    <TouchableOpacity key={stock.symbol} style={styles.stockCard}>
      <View style={styles.stockHeader}>
        <View style={styles.stockInfo}>
          <Text style={styles.stockSymbol}>{stock.symbol}</Text>
          <Text style={styles.stockName}>{stock.name}</Text>
          <Text style={styles.stockSector}>{stock.sector}</Text>
        </View>
        <View style={styles.stockPricing}>
          <Text style={styles.stockPrice}>${stock.price}</Text>
          <Text style={[
            styles.stockChange,
            { color: stock.change >= 0 ? theme.colors.success : theme.colors.error }
          ]}>
            {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent}%)
          </Text>
        </View>
      </View>
      
      <View style={styles.stockFooter}>
        <Text style={styles.marketCap}>Market Cap: {stock.marketCap}</Text>
        <TouchableOpacity style={styles.investButton}>
          <Text style={styles.investButtonText}>Invest</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const renderInvestmentIdea = (idea: any, index: number) => (
    <TouchableOpacity key={index} style={styles.ideaCard}>
      <View style={styles.ideaHeader}>
        <Text style={styles.ideaTitle}>{idea.title}</Text>
        <View style={[
          styles.riskBadge,
          { backgroundColor: getRiskColor(idea.riskLevel) + '15' }
        ]}>
          <Text style={[styles.riskText, { color: getRiskColor(idea.riskLevel) }]}>
            {idea.riskLevel}
          </Text>
        </View>
      </View>
      
      <Text style={styles.ideaDescription}>{idea.description}</Text>
      
      <View style={styles.ideaStats}>
        <View style={styles.ideaStocks}>
          <Text style={styles.ideaStocksLabel}>Includes:</Text>
          <Text style={styles.ideaStocksList}>{idea.stocks.join(', ')}</Text>
        </View>
        <Text style={[
          styles.ideaPerformance,
          { color: theme.colors.success }
        ]}>
          {idea.performance}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low': return theme.colors.success;
      case 'Medium': return theme.colors.accent;
      case 'Medium-High': return theme.colors.warning;
      case 'High': return theme.colors.error;
      default: return theme.colors.textSecondary;
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Invest</Text>
        <TouchableOpacity style={styles.watchlistButton}>
          <Ionicons name="bookmark-outline" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search stocks, ETFs, or companies"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesRow}>
            {categories.map(renderCategoryButton)}
          </View>
        </ScrollView>
      </View>

      {/* Investment Ideas */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Investment Ideas</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.ideasRow}>
            {investmentIdeas.map(renderInvestmentIdea)}
          </View>
        </ScrollView>
      </View>

      {/* Trending Stocks */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Stocks</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.stocksList}>
          {trendingStocks.map(renderStockCard)}
        </View>
      </View>
    </ScrollView>
  );
};

export default InvestScreen;