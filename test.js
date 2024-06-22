function createNFT(name, eyeColor, shirtType, bling) {
    return {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
}

// Variable to store all NFTs
let myNFTs = [];

// Function to print NFT details
function printNFTDetails(nft) {
    console.log(NFT Name: ${nft.name});
    console.log(Eye Color: ${nft.eyeColor});
    console.log(Shirt Type: ${nft.shirtType});
    console.log(Bling: ${nft.bling});
    console.log("--------------------");
}

// Creating some NFTs
let nft1 = createNFT("Cool NFT", "blue", "t-shirt", "gold chain");
let nft2 = createNFT("Awesome NFT", "green", "hoodie", "diamond earrings");

// Adding NFTs to the collection
myNFTs.push(nft1, nft2);

// Printing details of all NFTs in the collection
console.log("Printing NFT Details:");
myNFTs.forEach(nft => {
    printNFTDetails(nft);
});
