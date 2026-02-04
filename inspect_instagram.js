const token = 'EAAHYJLf6TjMBQr00JZCPftrSeX1iO2368Ra4J97aRrwrVQbQdbcngBmFf63RpeNtcZBpICCTDXx5zZAcxUFBA9UCbjg7eR4KYBNZAcn8VtF6RQG4rARImqlm10wz323n9ftZB3LWHDZBLHc9mNxKLJIUsiYDZBhGJZCuFMR9ZAdRHZAzZAVdi2mcMZA7o6jOUZAEwwJu6gV6C87hcZA9EZCHj3UwQOvIijfz5aGCryR9yjZAkJN0Kqj38bmRrpp8wa2n0LlrhKBX3sJuW64480Pp1jpOoyctGkayKb4zZB0LFRxJvPRBnk2tKggggzZAIQAlL2In59ZBtAuZAQhAXFUxDJUSIwViO1En5yoZD';

async function inspect() {
    try {
        // 1. Get Accounts (Pages) to find the connected Instagram Business Account
        const accountsRes = await fetch(`https://graph.facebook.com/v22.0/me/accounts?fields=name,instagram_business_account&access_token=${token}`);
        const accountsData = await accountsRes.json();

        console.log('Accounts Data:', JSON.stringify(accountsData, null, 2));

        if (accountsData.data && accountsData.data.length > 0) {
            // Find the first account with an instagram_business_account
            const accountWithIg = accountsData.data.find(acc => acc.instagram_business_account);

            if (accountWithIg) {
                const igUserId = accountWithIg.instagram_business_account.id;
                console.log('Found IG User ID:', igUserId);

                // 2. Fetch Media
                const mediaRes = await fetch(`https://graph.facebook.com/v22.0/${igUserId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=6&access_token=${token}`);
                const mediaData = await mediaRes.json();
                console.log('Media Data:', JSON.stringify(mediaData, null, 2));
            } else {
                console.log('No Instagram Business Account connected to any page.');
            }
        } else {
            console.log('No accounts found.');
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

inspect();
