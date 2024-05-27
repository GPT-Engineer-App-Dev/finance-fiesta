import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bg="#fff1e5">
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
              World
            </Link>
            <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Business
            </Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Opinion
            </Link>
            <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Tech
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Main Headline Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>
            Main Headline: Breaking News
          </Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>
            Other Articles
          </Heading>
          <VStack align="start" spacing={4}>
            <Link as={RouterLink} to="/article1" _hover={{ textDecoration: "none", color: "gray.600" }}>
              Article 1: Lorem ipsum dolor sit amet
            </Link>
            <Link as={RouterLink} to="/article2" _hover={{ textDecoration: "none", color: "gray.600" }}>
              Article 2: Integer nec odio
            </Link>
            <Link as={RouterLink} to="/article3" _hover={{ textDecoration: "none", color: "gray.600" }}>
              Article 3: Sed cursus ante dapibus
            </Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Text>&copy; 2023 Financial Times</Text>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link as={RouterLink} to="/privacy" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Privacy Policy
            </Link>
            <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;